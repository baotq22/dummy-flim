export const QA = ({ question, answer, isOpen, changeOpenQuestion }) => {
    return (
        <>
            <p id='buttonQ' onClick={() => changeOpenQuestion(question)}>{question} <span id='action__symbol' onClick={() => changeOpenQuestion(question)} style={{ marginLeft: 20, cursor: 'pointer' }}>{isOpen ? 'X' : '+'}</span></p>
            {
                isOpen && <p id='button__details'>
                    {answer}
                </p>
            }
        </>
    )
}