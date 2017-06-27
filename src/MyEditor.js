import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { ImageResize } from 'quill-image-resize-module';
import '../node_modules/react-quill/dist/quill.snow.css';

Quill.register('modules/imageResize', ImageResize);

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option selected></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-strike"></button>
    <button className="ql-underline"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select>
    <button className="ql-image"></button>    
  </div>
)



/**
 * Basic Editor
 */
class MyEditor extends Component {

    constructor(props) {
        super(props)
        this.state={text:''}
    }

    onTextChange(value) {
        this.setState({text:value})
    }

    render(){
        return (
            <div>
                <CustomToolbar />
                <ReactQuill 
                    value={this.state.text}
                    onChange={this.onTextChange.bind(this)}
                    modules={MyEditor.modules}
                    formats={MyEditor.formats}
                    theme="snow"
                />
             </div>

        )
    }

}

MyEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color',
]

MyEditor.modules = {
  toolbar: {
    container: "#toolbar",
    'image-tooltip': true,
    'link-tooltip': true,
  }
}

export default MyEditor