const replaceItemContent = ({
  item,
  oldValue = '',
  newValue = '',
  isGlobalReplace = false
}) => {
  const newContent = item.content.replace(new RegExp(oldValue, isGlobalReplace ? 'gi' : 'i'), newValue);

  return {
    ...item,
    content: newContent
  }
};

const replaceTextInAllItems = ({
  items = [],
  oldValue = '',
  newValue = '',
}) => items.map((item) => replaceItemContent({ item, oldValue, newValue, isGlobalReplace: true }));

const replaceTextInFirstItem = ({
  items = [],
  oldValue = '',
  newValue = '',
}) => {
  const newItems = [...items];
  const itemIndexToReplace = newItems.findIndex((item) => item.content.search(new RegExp(oldValue, 'gi')) >= 0);

  if (newItems[itemIndexToReplace]) {
    const replacedItem = replaceItemContent({ item: newItems[itemIndexToReplace], oldValue, newValue });

    newItems[itemIndexToReplace] = replacedItem;
  }

  return newItems;
};

export {
  replaceTextInAllItems,
  replaceTextInFirstItem
};