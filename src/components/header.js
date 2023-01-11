import Input from "./input"

const Header = ({ search, updateQuery }) => {
  return (
    <div className='note_app_header'>
      <h1>Win&apos;s Note</h1>
      <div className="note_search">
        <Input value={search} onChange={updateQuery} type='search' id='search_note' name='search_note' placeholder='Search Notes'/>
      </div>
    </div>
  )
}

export default Header
