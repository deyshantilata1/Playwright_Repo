import { test, expect } from '@playwright/test';
import { ContextMenuPage } from '../pages/contextMenuPage';

test('Context Menu Test', async ({ page }) => {

  const contextMenu = new ContextMenuPage(page);

  await contextMenu.goto();

  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toBe('You selected a context menu');
    await dialog.accept();
  });

  await contextMenu.rightClickBox();
});