export const FilterListSearch = (list, search) => {
  list.filter((item) =>
    search === '' ||
    item.nome.toLowerCase().substring(0, search.length) === search.toLowerCase()
      ? item
      : false
  );
};

export const FilterListSearchWord = (list, search) => {
  list.filter((item) =>
    search === '' ||
    item.nome.toLowerCase().substring(0, search.length) ===
      search.toLowerCase() ||
    item.significado.toLowerCase().substring(0, search.length) ===
      search.toLowerCase()
      ? item
      : false
  );
};
