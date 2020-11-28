import React from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

class ExcelTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null,
    };
    this.fileHandler = this.fileHandler.bind(this);
    // this.toggle = this.toggle.bind(this);
    this.renderFile = this.renderFile.bind(this);
    // this.fileInput = React.createRef();
  }

  renderFile = (fileObj) => {
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {  
        this.setState({
          dataLoaded: true,
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };

  fileHandler = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if (fileName.slice(fileName.lastIndexOf(".") + 1) === "xlsx") {
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false,
        });
        this.renderFile(fileObj);
      } else {
        this.setState({
          isFormInvalid: true,
          uploadedFileName: "",
        });
      }
    }
  };

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // }

  // TODO: run this in debug mode to see all the vars
  render() {
    return (
      <div>
        <input
          type="file"
          onChange={this.fileHandler.bind(this)}
          style={{ padding: "10px" }}
        />
        {this.state.dataLoaded && (
          <OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="ExcelTable2007"
            tableHeaderRowClass="heading"
          />
        )}
      </div>
    );
  }
}

export default ExcelTab;
