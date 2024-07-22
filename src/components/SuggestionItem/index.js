import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, update} = props
  const {suggestion} = suggestionsList

  const onClicking = () => {
    update(suggestion)
  }

  return (
    <li className="list-elements">
      <p>{suggestion}</p>
      <button className="button" type="button" onClick={onClicking}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="icon"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
