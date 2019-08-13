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
{ amount: '$15 to win $5', date: '9/9/19', wager: 'Saints over Texans', notes: 'Seems like a simple bet.' },
{ amount: '$120 to win $70.58', date: '8/11/19', wager: 'Panthers over 7.5 wins', notes: 'Number seems low. There will be plenty of time to hedge if all goes to crap.' },
{ amount: '$12.36 to win $7.97', date: '9/8/19', wager: 'Rams over Panthers', notes: 'First hedge on Panthers bet. If Panthers win, I will be happy.' }];



/*========================================================
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
    results.insertAdjacentHTML('beforeend', '<tr class="' + `${count % 2 == 0 ? "" : "bg-light"}` + ' "><th scope="row">' + str.amount + '</th><td>' + str.date + '</td><td>' + str.wager + '</td><td>' + str.notes + '</td><tr>');
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