/*
TODO: 
- click event for saving to array
*/





//Vars
const InputVal = document.getElementById('search'); //input box
const results = document.getElementById('results'); //reults box
const toggleArrow = document.getElementsByClassName("toggleSort");
const selectBox = document.getElementById('exampleSelect1');
const clearInput = document.getElementById('clearInput');


const people = [
{ date: '8/16/19', bet: '$10', towin: '$10.50',  result: ' ', description: 'Colts under 6.5 wins'},
{ date: '9/23/19', bet: '$30', towin: '$48',  result: '', description: 'Patriots to win the AFC'},
{ date: '9/23/19', bet: '$30', towin: '$82.50',  result: '', description: 'Chiefs to win the AFC'},
{ date: '9/23/19', bet: '$20', towin: '$66.60',  result: '', description: 'Patriots to win the Super Bowl'},
{ date: '10/29/19', bet: '$12', towin: '$30',  result: '', description: 'Saints to win the NFC'},
{ date: '11/7/19', bet: '$20', towin: '$130',  result: '', description: 'Saints to win the Super Bowl'},
{ date: '11/7/19', bet: '$20', towin: '$140',  result: '', description: 'Ravens to win the Super Bowl'},
{ date: '12/11/19', bet: '$30', towin: '$66',  result: '', description: 'Ravens to win the Super Bowl'},
{ date: '12/11/19', bet: '$20', towin: '$13.79',  result: '', description: 'AFC to win the Super Bowl'},
{ date: '12/23/19', bet: '$50', towin: '$12.50',  result: '', description: '@ Saints to beat the Vikings'},
{ date: '12/23/19', bet: '$50', towin: '$36.48',  result: '', description: 'Seahawks to win @ Eagles'},
{ date: '12/23/19', bet: '$20', towin: '$9.09',  result: '', description: '@ Patriots to beat the Titans'}]




/*===================================================
                                                              -------------------------build select box---------------
                                                              =========================================================*/

if (selectBox.addEventListener) {
  selectBox.addEventListener('input', () => {
    RealChange();
  }, false);
} else if (InputVal.attachEvent) {
  selectBox.attachEvent('onpropertychange', () => {
    RealChange();
  });
}


(buildSelect = () => {
  var buildKeys = Object.keys(people[0]).map(keys => {
    //console.log(keys);
    //return keys;
    selectBox.insertAdjacentHTML('beforeend', '<option target="' + keys + '">' + keys + '</option>');
  });
})();
/*--------------------------------------------------------*/



/*========================================================
                                                             ------------------on input type/search-------------------
                                                             =========================================================*/
if (InputVal.addEventListener) {
  InputVal.addEventListener('input', () => {
    RealChange();
  }, false);
} else if (InputVal.attachEvent) {
  InputVal.attachEvent('onpropertychange', () => {
    RealChange();
  });
}
/*---------------------------------------------------------*/



/*=========================================================
                                                              -------------------filter input----------------------------
                                                              ===========================================================*/

//const RealChange = () => {
(RealChange = () => {



  const SelectedSearchVal = selectBox.value; //select box search value  
  const v = InputVal.value; //input value  

  //set placeholder of input to what user selected to search for  
  InputVal.setAttribute("placeholder", "Search the wagers by " + SelectedSearchVal + " ");

  results.innerHTML = "";

  /*takes people object and filters for name that includes user search input -> maps results and appends li to results*/
  // const t = people.filter((x) => x.name.includes(v)).map((str, count) => {

  const t = people.filter(x => {

    let searchKey = x[SelectedSearchVal]; //select search box value

    if (typeof searchKey === 'string' || searchKey instanceof String) {

      return searchKey.includes(v);

    } else {
      //convert to string for search
      return searchKey.toString().includes(v);
      //alert('havnot built int search')
    }

  });
  if (t.length < 1) {
    results.insertAdjacentHTML('afterbegin', 'No Results');
  }
  t.map((str, count) => {
    count = count + 1;
    // if(count % 2 == 0) {//is even using js template literal
    results.insertAdjacentHTML('beforeend', '<tr class="' + `${count % 2 == 0 ? "" : "bg-light"}` + ' "><th scope="row">' + str.date + '</th><td>' + str.bet + '</td><td>' + str.towin + '</td><td>' + str.result + '</td><td>' + str.description + '</td><tr>');
    //} else {
    //  results.insertAdjacentHTML('beforeend', '<tr><th scope="row">' + count +'</th><td>' +  str.name + '</td><td>' + str.job + '</td><td>' + str.age + '</td><tr>');
    //   }
  });

  if (InputVal.value !== "") {
    clearInput.setAttribute("style", "display:block; ");
  } else {
    clearInput.setAttribute("style", "display:none; ");
  }


})();
/*}
      RealChange();*/
/*------------------------------------------------------------------*/



/*=========================================================
                                                                       -------------------column sort----------------------------
                                                                       ===========================================================*/
const sortCol = function () {

  results.innerHTML = ""; //empty the table

  let attribute = this.getAttribute("toggle"); //Get Clicked arrow toggle custon attribute
  let parent = this.parentElement; //get clicked arrow parent element the <th>
  let parentAttribute = parent.getAttribute('target'); //get the parent elements target attribute

  //sort function
  const s = people.sort((a, b) => {

    //get the parent attribute from above and set the paremeters key to its value: ex: click name then Akey=a.name.toUpperCase()
    let Akey = a[parentAttribute];
    let Bkey = b[parentAttribute];

    //if clicked colum key values are string then sort by a-z else int -> sort asc
    if (typeof Akey === 'string' || Akey instanceof String) {
      var nameA = Akey.toUpperCase(); // ignore upper and lowercase
      var nameB = Bkey.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {return -1;}
      if (nameA > nameB) {return 1;}
      return 0;
    } else {
      //sort integer
      return Akey - Bkey;
    }

  });

  //if clicked arrows toggle attribute is false
  if (attribute == 'false') {

    this.setAttribute("toggle", "true");
    this.classList.remove('fa-arrow-down');
    this.classList.add('fa-arrow-up');

    //loop through the sorted people object with loop counter
    s.map((str, count) => {
      count = count + 1; //counter

      //if even -> add .bg-light for stripes
      results.insertAdjacentHTML('beforeend', '<tr class="' + `${count % 2 == 0 ? "" : "bg-light"}` + ' "><th scope="row">' + str.id + '</th><td>' + str.name + '</td><td>' + str.job + '</td><td>' + str.age + '</td><tr>');

    }); //s.map

  } else {

    this.setAttribute("toggle", "false");
    this.classList.remove('fa-arrow-up');
    this.classList.add('fa-arrow-down');

    s.reverse().map((str, count) => {
      count = count + 1;

      results.insertAdjacentHTML('beforeend', '<tr class="' + `${count % 2 == 0 ? "" : "bg-light"}` + ' "><th scope="row">' + str.id + '</th><td>' + str.name + '</td><td>' + str.job + '</td><td>' + str.age + '</td><tr>');

    }); //s.reverse() 

  } //else

}; //sortCol


//make array from colum arrows and on click sortCol()
const getsortClass = Array.from(toggleArrow).map(element => {
  element.addEventListener('click', sortCol);
});
/*------------------------------------------------------------------*/





const reset = () => {
  InputVal.value = "";
  RealChange();
};
clearInput.addEventListener('click', reset);
