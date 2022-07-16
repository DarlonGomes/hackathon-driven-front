import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import "highlight.js/styles/github.css"

export default function App() {
    const [markdown, setMarkdown] = useState('')
    const [selectedText, setSelectedText] = useState('')
    const tableExample = `
| a | b |
| - | - |
|text1 | text2|
`

    const setTextType = (type) => `${markdown}\n\n${type}`
    const changeTextSelected = (type) => markdown.replace(selectedText, `${type}${selectedText}${type}`)

    return (
        <>
            <button onClick={() => setMarkdown(selectedText !== '' ? changeTextSelected('**') : setTextType('**Bold**'))}>Bold</button>
            <button onClick={() => setMarkdown(selectedText !== '' ? changeTextSelected('~') : setTextType('~Line Through~'))}>Line Through</button>
            <button onClick={() => setMarkdown(selectedText !== '' ? changeTextSelected('*') : setTextType('*Italic*'))}>Italic</button>
            <button onClick={() => setMarkdown(setTextType('* [ ] Item'))}>List</button>
            <button onClick={() => setMarkdown(setTextType('1. Item'))}>List Number</button>
            <button onClick={() => setMarkdown(setTextType('* [x] Item'))}>List Done</button>
            <button onClick={() => 
                setMarkdown(setTextType('![IMAGE EXAMPLE](https://pbs.twimg.com/profile_images/1372945787739586563/KHO4XjyA_200x200.jpg)'))}>
                    Image
            </button>
            <button onClick={() => setMarkdown(setTextType(tableExample))}>Table</button>
            <button onClick={() => setMarkdown(setTextType('```js\nconsole.log("Hello World")\n```'))}>{'</>'}</button>
            <div style={{ backgroundColor: '#333', color: '#fff' }}>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}  />
            </div>
            <textarea cols="30" rows="10" style={{ width: '600px', height: '600px' }} value={markdown} 
                onChange={(e) => setMarkdown(e.target.value)} 
                onMouseUp={() => setSelectedText(window.getSelection().toString())}
                onKeyUp={(e) => e.shiftKey ? setSelectedText(window.getSelection().toString()) : false}
            />
        </>
    )
}