$(function () {
  let saveButtons=$(".saveBtn");
  let timeBlocks=$(".time-block");
  let currentHour=dayjs().format('H');
  let dateDiv=document.querySelector("#currentDay");
  let todaysDate=dayjs().format('dddd, MMMM D')

  for(let i =0; i<saveButtons.length;i++){
    saveButtons[i].addEventListener("click",function(){
      localStorage.setItem(this.parentElement.id,this.previousElementSibling.value);
    })
  }

  for(let i=0;i<timeBlocks.length;i++){
    let blockTime=(timeBlocks[i].id).split('hour-').join('').trim();
    if(+blockTime==currentHour)
      timeBlocks[i].classList.add("present")
    else if(+blockTime>currentHour)
      timeBlocks[i].classList.add("future")
    else
      timeBlocks[i].classList.add("past")

    let textBlock=timeBlocks[i].children[1];
    let blockId=timeBlocks[i].id;
    if(localStorage.getItem(blockId)){
      textBlock.textContent=localStorage.getItem(blockId);
    }
  }
    
  dateDiv.innerHTML=todaysDate;
})

function compare() {
  var blocks = $(".time-block");
  var ourHour = moment().hours();

  for (var i = 0; i < blocks.length; i++) {
    var blockHour = parseInt(blocks[i].id.split("-")[1]);
    if (ourHour == blockHour) {
      blocks[i].className = "row time-block present";
    } else if (ourHour < blockHour) {
      blocks[i].className = "row time-block future";
    } else if (ourHour > blockHour) {
      blocks[i].className = "row time-block past";
    }
  }
};

