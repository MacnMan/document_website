/**
 * Small, content-driven touches applied after every route render. Nothing
 * here changes the pages' markdown; each helper recognises a pattern in the
 * rendered DOM and tags it for the CSS in src/css/eleven.css.
 *
 * - labelTables: copies a table's column headers onto its body cells as
 *   `data-label` and marks the table `data-stackable`, so a wide table can
 *   become a list of label / value cards when the content column is narrow.
 * - markBoxLists: tags the bullet list under a "What's in the Box" heading
 *   as `.box-list` (rendered as item tiles) and turns a trailing `*` on an
 *   item — the pages' marker for optional accessories — into a <sup>.
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import type {ClientModule} from '@docusaurus/types';

function labelTables(): void {
  document
    .querySelectorAll<HTMLTableElement>('.markdown table:not([data-stackable])')
    .forEach((table) => {
      const headers = Array.from(table.querySelectorAll('thead th')).map(
        (th) => th.textContent?.trim() ?? '',
      );
      // No header, or a header with no text (an image grid): leave it alone.
      if (!headers.some(Boolean)) {
        return;
      }
      table.querySelectorAll('tbody tr').forEach((row) => {
        Array.from(row.children).forEach((cell, i) => {
          if (cell instanceof HTMLTableCellElement && headers[i]) {
            cell.dataset.label = headers[i];
          }
        });
      });
      table.dataset.stackable = '';
    });
}

const BOX_HEADING = /what.?s\s+in\s+the\s+box/i;

function markBoxLists(): void {
  document
    .querySelectorAll<HTMLElement>('.markdown h2, .markdown h3')
    .forEach((heading) => {
      if (!BOX_HEADING.test(heading.textContent ?? '')) {
        return;
      }
      // The first list between this heading and the next one.
      let el = heading.nextElementSibling;
      while (el && !/^H[1-6]$/.test(el.tagName)) {
        if (el.tagName === 'UL') {
          if (!el.classList.contains('box-list')) {
            el.classList.add('box-list');
            el.querySelectorAll(':scope > li').forEach((item) => {
              const last = item.lastChild;
              if (
                last?.nodeType === Node.TEXT_NODE &&
                /\*\s*$/.test(last.textContent ?? '')
              ) {
                last.textContent = (last.textContent ?? '').replace(/\s*\*\s*$/, '');
                const mark = document.createElement('sup');
                mark.className = 'box-list__mark';
                mark.textContent = '*';
                item.appendChild(mark);
              }
            });
          }
          return;
        }
        el = el.nextElementSibling;
      }
    });
}

function enhance(): void {
  labelTables();
  markBoxLists();
}

function schedule(): void {
  // The route's DOM is in place; give React a frame to commit the MDX tree.
  window.requestAnimationFrame(enhance);
}

if (ExecutionEnvironment.canUseDOM) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule, {once: true});
  } else {
    schedule();
  }
}

const clientModule: ClientModule = {
  onRouteDidUpdate() {
    schedule();
  },
};

export default clientModule;
