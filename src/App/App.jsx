import './App.scss';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce';
import Search from './Search/Search';
import Replace from './Replace/Replace';
import List from 'components/List/List';
import Loader from 'components/Loader/Loader';
import {
  replaceTextInAllItems,
  replaceTextInFirstItem
} from 'utils/replace';
import {
  parseSearchResult,
  highlightSearchMatches
} from 'utils/searchDataParser';

const DEBOUNCE_TIMEOUT = 700;
const obtainRequestUrl = searchPhrase => `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&format=json&srsearch=${searchPhrase}`;
const searchResultInitData = [];

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchResult, setSearchResult] = useState(searchResultInitData);
  const [phraseToReplace, setPhraseToReplace] = useState('');
  const [debouncedSearchPhrase] = useDebounce(searchPhrase, DEBOUNCE_TIMEOUT);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (!searchPhrase) {
      setSearchResult(searchResultInitData);

      return;
    }

    setIsLoading(true);

    const result = await axios(obtainRequestUrl(searchPhrase));

    setSearchResult(parseSearchResult(result.data?.query?.search));
    setIsLoading(false);
  };

  const onReplaceAll = useCallback(() => {
    setSearchResult(replaceTextInAllItems({
      items: searchResult,
      oldValue: searchPhrase,
      newValue: phraseToReplace
    }));
  }, [searchResult, searchPhrase, phraseToReplace]);

  const onReplace = useCallback(() => {
    setSearchResult(replaceTextInFirstItem({
      items: searchResult,
      oldValue: searchPhrase,
      newValue: phraseToReplace,
    }));
  }, [searchResult, searchPhrase, phraseToReplace]);

  useEffect(() => {
    fetchData();
  }, [debouncedSearchPhrase]);

  return (
    <div className="main__container">
      <Search
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        onSearch={fetchData}
      />
      <Replace
        setPhraseToReplace={setPhraseToReplace}
        phraseToReplace={phraseToReplace}
        onReplaceAll={onReplaceAll}
        onReplace={onReplace}
      />
      {isLoading ? <Loader /> : (
        <List
          data={highlightSearchMatches(searchResult, searchPhrase)}
        />
      )}
    </div>
  )
};


export default App