export const QuestionAndAnswer = ({ question, answer, isOpen, changeOpenQuestion }) => {
    return (
        <div style={{ border: '1px solid white', margin: 10, padding: 10 }}>
            <p>{question} <span onClick={() => changeOpenQuestion(question)} style={{ marginLeft: 20, cursor: 'pointer' }}>{isOpen ? 'X' : '+'}</span></p>
            {
                isOpen && <p>{answer}</p>
            }
        </div>
    )
}
