import * as React from 'react'

interface ISearchBoxStateless {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox: React.FunctionComponent<ISearchBoxStateless> = ({
  searchChange
}) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
