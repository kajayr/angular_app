import {Component} from '@angular/core';

@Component({
    selector: "app-server",
    templateUrl:"./server.component.html",
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
titleMsg = 'This is Team4, your virtual assistant. How can I help you today?';
subTitle = "Press a number in the list to continue the process";
button1 = "Setup a new account";
button2 = "Login";
inputTitle1 = "";
inputTitle2 = "";
inputTitle3 = "";
inputTitle4 = "";
inputTitle5 = "";
input1 = "";
hideInput1 = true;
input2 = "";
hideInput2 = true;
input3 = "";
hideInput3 = true;
input4 = "";
hideInput4 = true;
input5 = "";
hideInput5 = true;
hideBtn1 = false;
hideBtn2 = false;
hideSubmitBtn = true;
imagePath;
hideImg = true;
fade = "";
click1 = "setupNewAcc()";
click2 = "setupNewAcc()";
constructor(){
//this.serverStatus = Math.random() > 0.5 ? "online" : "offline"
}
setupNewAcc(){
    this.imagePath = "../../assets/images/SetUpResult.jpg";
    this.hideInput1 = false;
    this.hideInput2 = false;
    this.hideInput3 = false;
    this.hideInput4 = false;
    this.hideInput5 = false;
    this.hideSubmitBtn = false;
    this.titleMsg = "Thank you for choosing us. Please select an option:";
    this.subTitle = "First We need some information from you in order to create your account";
    this.inputTitle1 = "What is your first name?";
    this.inputTitle2 = "What is your last name?";
    this.inputTitle3 = "What is your address";
    this.inputTitle4 = "What is your phone number?";
    this.inputTitle5 = "How much is your salary?";
}
submit(){
    this.hideImg = false;
    this.hideBtn1 = true;
    this.hideBtn2 = true;
    this.fade = "fade-in"
    this.click1 = "test"
 //  return this.serverStatus === 'online' ? 'green' : 'red';
}
test(){
    alert("works")
}
}