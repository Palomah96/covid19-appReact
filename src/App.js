
/*
What Do you need to install ?
npm install @tensorflow/tfjs
To run the project use :
npm start

 */

import React from 'react';
import PropTypes from 'prop-types';
import * as tf from '@tensorflow/tfjs';

import './css/app.css';
const App= ({  }) => (
    <div>
        <div className="container">
          <div className="mobilenet-demo-container">
              <h3>Covid 19</h3>
              <div className="demo-wrapper">
                    <div>
                        <button id="load-button" className="input-button" onClick={loadModel}>Load Model</button>
                        <button id="demo-image-button" className="input-button" onClick={loadDemoImage}>Demo Image</button>
                        <label for="select-file-image" className="input-button">
                          Upload Image
                        </label>
                        <input id="select-file-image" type="file" onChange={loadFile(event)} style={{"display": "none"}}/>
                         <div id="progress-box" style={{"display": "none", "width": "100% !important"}}>
                             <img src="assets/loading.gif" id="demo-load" width="100px" />
                            <p style={{"color": "white"}}>Loading model..</p>
                         </div>
  
                          <div>
                          <button id="predict-button" className="input-button predict-button" onClick={predButton}>Predict</button>
                         </div>
                
              </div>
          </div>
  
          <div className="demo-output">
                    <div className="out-box" id="select-file-box" style={{"display":" none"}}>
                      <img id='test-image' />
                     </div>
                   <div className="out-box" id="predict-box" style={{"display": "none"}}>
                      <p id="prediction"></p>
                      <br/>
                      <p><b style={{"color": "#c2c2c2 !important", "fontStyle": "italic", "fontWeight": "100","fontSize": "11px"}}>Top-5 Predictions</b></p>
                      <ul id="predict-list">
                      </ul>
                  </div>
              </div>
              </div>
          </div>
  
          <hr/>
          <div className="container">
          <div className="mobilenet-demo-container">
              <h3>Pneumonia</h3>
              <div class="demo-wrapper">
                    <div>
                        <button id="load-button" className="input-button" onclick="loadModel()">Load Model</button>
                        <button id="demo-image-button" className="input-button" onclick="loadDemoImage()">Demo Image</button>
                        <label for="select-file-image" className="input-button">
                          Upload Image
                        </label>
                        <input id="select-file-image" type="file" onchange="loadFile(event)" style={{"display": "none"}}/>
                         <div id="progress-box" style={{"display": "none", "width": "100% !important"}}>
                             <img src="assets/loading.gif" id="demo-load" width="100px" />
                            <p style={{"color": "white"}}>Loading model..</p>
                         </div>
  
                          <div>
                          <button id="predict-button" className="input-button predict-button" onclick="predButton()">Predict</button>
                         </div>
                
              </div>
          </div>
  
          <div className="demo-output">
                    <div className="out-box" id="select-file-box" style={{"display":" none"}}>
                      <img id='test-image' />
                     </div>
                   <div className="out-box" id="predict-box" style={{"display": "none"}}>
                      <p id="prediction"></p>
                      <br/>
                      <p><b style={{"color": "#c2c2c2 !important", "fontStyle": "italic", "fontWeight": "100","fontSize": "11px"}}>Top-5 Predictions</b></p>
                      <ul id="predict-list">
                      </ul>
                  </div>
              </div>
              </div>
          </div>
       <hr/>
       <div className="container">
          <div className="mobilenet-demo-container">
              <h3>Breast Cancer</h3>
              <div class="demo-wrapper">
                    <div>
                        <button id="load-button" className="input-button" onClick={loadModel}>Load Model</button>
                        <button id="demo-image-button" className="input-button" onclick="loadDemoImage()">Demo Image</button>
                        <label for="select-file-image" className="input-button">
                          Upload Image
                        </label>
                        <input id="select-file-image" type="file" onchange="loadFile(event)" style={{"display": "none"}}/>
                         <div id="progress-box" style={{"display": "none", "width": "100% !important"}}>
                             <img src="assets/loading.gif" id="demo-load" width="100px" />
                            <p style={{"color": "white"}}>Loading model..</p>
                         </div>
  
                          <div>
                          <button id="predict-button" className="input-button predict-button" onclick="predButton()">Predict</button>
                         </div>
                
              </div>
          </div>
  
          <div className="demo-output">
                    <div className="out-box" id="select-file-box" style={{"display":" none"}}>
                      <img id='test-image' />
                     </div>
                   <div className="out-box" id="predict-box" style={{"display": "none"}}>
                      <p id="prediction"></p>
                      <br/>
                      <p><b style={{"color": "#c2c2c2 !important", "fontStyle": "italic", "fontWeight": "100","fontSize": "11px"}}>Top-5 Predictions</b></p>
                      <ul id="predict-list">
                      </ul>
                  </div>
              </div>
              </div>
          </div>
  
          
  
  </div>
  );
  var loader;
  var load_button;
  var modelName;
  // Load model function 
  async function loadModel() {
      let model;
      console.log("model loading..");
      loader = document.getElementById("progress-box");
      load_button = document.getElementById("load-button");
      loader.style.display = "block";
      modelName = "model";
      model = undefined;
      model = await tf.loadLayersModel('output/model/model.json');
      loader.style.display = "none";
      load_button.disabled = true;
      load_button.innerHTML = "Loaded Model";
      console.log("model loaded..");
  }
  
  //LoadFile function 
  async function loadFile() {
      console.log("image is in loadfile..");
      document.getElementById("select-file-box").style.display = "table-cell";
        document.getElementById("predict-box").style.display = "table-cell";
        document.getElementById("prediction").innerHTML = "Click predict to find my label!";
        var fileInputElement = document.getElementById("select-file-image");
        console.log(fileInputElement.files[0]);
      renderImage(fileInputElement.files[0]);
  }
  
  function renderImage(file) {
      var reader = new FileReader();
      var model;
      var img_url;
      console.log("image is here..");
      reader.onload = function(event) {
        img_url = event.target.result;
        console.log("image is here2..");
        document.getElementById("test-image").src = img_url;
      }
      reader.readAsDataURL(file);
    }
  
    async function predButton() {
      console.log("model loading..");
      var model;
      if (model === undefined) {
          alert("Please load the model first..")
      }
      if (document.getElementById("predict-box").style.display === "none") {
          alert("Please load an image using 'Demo Image' or 'Upload Image' button..")
      }
      console.log(model);
      let image  = document.getElementById("test-image");
      let tensor = preprocessImage(image, modelName);
      let IMAGENET_CLASSES;
      let predictions = await model.predict(tensor).data();
      let results = Array.from(predictions)
          .map(function (p, i) {
              return {
                  probability: p,
                  className: IMAGENET_CLASSES[i]
              };
          }).sort(function (a, b) {
              return b.probability - a.probability;
          }).slice(0, 5);
  
      document.getElementById("predict-box").style.display = "block";
      document.getElementById("prediction").innerHTML = "MobileNet prediction <br><b>" + results[0].className + "</b>";
  
      var ul = document.getElementById("predict-list");
      ul.innerHTML = "";
      results.forEach(function (p) {
          console.log(p.className + " " + p.probability.toFixed(6));
          var li = document.createElement("LI");
          li.innerHTML = p.className + " " + p.probability.toFixed(6);
          ul.appendChild(li);
      });
  
  }
  
  function preprocessImage(image, modelName) {
      let tensor = tf.browser.fromPixels(image)
          .resizeNearestNeighbor([224, 224])
          .toFloat();
  
      if (modelName === undefined) {
          return tensor.expandDims();
      } else if (modelName === "mobilenet") {
          let offset = tf.scalar(127.5);
          return tensor.sub(offset)
              .div(offset)
              .expandDims();
      } else {
          alert("Unknown model name..")
      }
  }
  
  function loadDemoImage() {
      var base_path;
      var img_path;
      document.getElementById("predict-box").style.display = "table-cell";
        document.getElementById("prediction").innerHTML = "Click predict to find my label!";
      document.getElementById("select-file-box").style.display = "table-cell";
      document.getElementById("predict-list").innerHTML = "";
  
      base_path = "dataset/test/tennis.jpeg"
      // maximum = 4;
      // minimum = 1;
      // var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      // img_path = base_path + randomnumber + ".jpeg"
      img_path = base_path
      document.getElementById("test-image").src = img_path;
  }
    
  App.propTypes = {
    classes: PropTypes.object.isRequired
  };
  export default App;
 
