// Import React dependencies.
import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

 
const SlateEditor=(props)=>{
  const [editor] = useState(() => withReact(createEditor()))
  const messageHandler=()=>{
    props.getMessage(editor.children[0].children[0].text)
   
  }
   console.log('editor',editor)
  return(
    <Slate editor={editor} initialValue={initialValue} >
    <Editable className='outline-none focus:outline-none' onKeyUp={messageHandler}/>
    </Slate>
    )
}
export default SlateEditor;