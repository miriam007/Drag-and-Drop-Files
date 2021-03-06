import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';

class FileList extends Component {
    state={
        files: []
    }

    handleDrop= (files) =>{
        let fileList= this.state.files
        for (const i=0; i < files.length; i++) {
            if (!files[i].name) return
            fileList.push(files[i].name)
        }
        this.setState({files: fileList})
    }

    render(){
        return(
            <DragAndDrop handleDrop={this.handleDrop}>
            <div style={{height: 300, width: 250}}>
            {this.state.files.map((file)=>
                <div key={file}>{file}</div>
                )}
            </div>
            </DragAndDrop>
        )
    }
}

export default FileList;