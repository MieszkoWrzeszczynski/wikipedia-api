const parseSearchItem = (item) => ({
  title: item.title,
  id: item.pageid,
  content: item.snippet.replace(/(<([^>]+)>)/gi, "")
});

const parseSearchResult = (data = []) => data.map(parseSearchItem);

const highlightSearchMatches = (items, valueToHighlight) => {
  if (!valueToHighlight) {
    return items;
  }

  return items.map((item) => {
    const newContent = item.content.replace(
      new RegExp(valueToHighlight, 'gi'),
      match => `<mark> ${match} </mark>`)

    return {
      ...item,
      content: newContent
    }
  })
}

export {
  parseSearchResult,
  highlightSearchMatches
};
