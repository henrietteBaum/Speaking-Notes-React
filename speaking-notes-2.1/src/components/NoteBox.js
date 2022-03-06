import React, { useState } from 'react'
import { StyledTextarea } from '../styles/NoteBox.style';
import ClearTextArea from './ClearTextArea';
import FileUpload from './FileUpload';
import SaveNoteText from './SaveNoteText';
import { StyledSidebar} from '../styles/Sidebar.style';
import WebSpeech from './WebSpeech';

function NoteBox() {

  const [noteText, setNoteText] = useState([]);

  const handleChange = event => {
    setNoteText(event.target.value);
  };


  return (
    <>
    <StyledTextarea 
      value={noteText} 
      onChange={handleChange} 
      placeholder='Type text here or open existing file'
    />
     <FileUpload
      noteText={noteText}
      setNoteText={setNoteText}
     />
     <StyledSidebar>
     <WebSpeech
      noteText={noteText}
      setNoteText={setNoteText}
      />
     <ClearTextArea
      noteText={noteText}
      setNoteText={setNoteText}
     />
      </StyledSidebar>
     <SaveNoteText
      noteText={noteText}
      setNoteText={setNoteText}
     />
     </>
  )
}


export default NoteBox