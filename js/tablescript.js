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
{ date: '8/11/19', bet: '$120', towin: '$70.58',  result: ' ', description: 'Panthers over 7.5 wins'},
{ date: '8/16/19', bet: '$10', towin: '$10.50',  result: ' ', description: 'Colts under 6.5 wins'},
{ date: '8/17/19', bet: '$5.13', towin: '$6.41',  result: '$6.41', description: 'Browns to win @ Colts'},
{ date: '8/19/19', bet: '$10', towin: '$9.52',  result: '$9.52', description: '49ers to win @ Broncos'},
{ date: '8/23/19', bet: '$25', towin: '$5',  result: '', description: 'Patriots to win AFC East'},
{ date: '9/5/19', bet: '$5', towin: '$4.35',  result: '$4.35', description: 'Packers @ Bears under 46.5'},
{ date: '9/5/19', bet: '$5', towin: '$4.35',  result: '$4.35', description: 'Packers @ Bears under 46.5'},
{ date: '9/5/19', bet: '$10', towin: '$10',  result: '$10', description: 'Packers +3 to win @ Bears'},
{ date: '9/8/19', bet: '$12.36', towin: '$7.97',  result: '$7.97', description: 'Rams to win @ Panthers'},
{ date: '9/8/19', bet: '$60', towin: '$13.95',  result: '$13.95', description: '@ Eagles to beat Washington'},
{ date: '9/8/19', bet: '$40', towin: '$13.33',  result: '$13.33', description: '@ Chargers to beat Colts'},
{ date: '9/8/19', bet: '$30', towin: '$8.96',  result: '$8.96', description: '@ Seahawks to beat Bengals'},
{ date: '9/8/19', bet: '$11', towin: '$10',  result: '-$11', description: 'Rams @ Panthers Under 49.5'},
{ date: '9/8/19', bet: '$10', towin: '$2',  result: '$2', description: 'In Game Bet: Patriots to win @ Steelers'},
{ date: '9/8/19', bet: '$5', towin: '$4.35',  result: '$4.35', description: 'Broncos @ Raiders Under 43'},
{ date: '9/9/19', bet: '$15', towin: '$5',  result: '$5', description: '@ Saints to beat Texans'},
{ date: '9/11/19', bet: '$10', towin: '$9.52',  result: '-$10', description: 'Bucs @ Panthers Over 49.5'},
{ date: '9/11/19', bet: '$10', towin: '$15',  result: '$15', description: 'Colts to win @ Titans'},
{ date: '9/11/19', bet: '$20', towin: '$18.18',  result: '$18.18', description: 'Patriots -19 @ Dolphins'},
{ date: '9/12/19', bet: '$10', towin: '$28.31',  result: '$28.31', description: 'In Game Bet: Bucs to win @ Panthers'},
{ date: '9/15/19', bet: '$6', towin: '$4',  result: '$4', description: 'Bears to win @ Broncos'},
{ date: '9/15/19', bet: '$10', towin: '$8.33',  result: '-$10', description: 'Eagles to win @ Falcons'},
{ date: '9/15/19', bet: '$40', towin: '$13.77',  result: '$13.77', description: 'Chiefs to win @ Raiders'},
{ date: '9/16/19', bet: '$100', towin: '$33.20',  result: '$33.20', description: 'Browns to win @ Jets'},
{ date: '9/16/19', bet: '$10', towin: '$7.69',  result: '-$10', description: 'Titans to win @ Jaguars'},
{ date: '9/16/19', bet: '$5', towin: '$4.76',  result: '-$5', description: 'Titans @ Jaguars over 40'},
{ date: '9/16/19', bet: '$5', towin: '$13.22',  result: '-$5', description: 'Two-Team Parlay: Patriots -22.5, Cowboys -23'},
{ date: '9/16/19', bet: '$10', towin: '$8.70',  result: '$8.70', description: 'Colts over @ Falcons'},
{ date: '9/16/19', bet: '$50', towin: '$20',  result: '$20', description: '@ Chiefs to beat Ravens'},
{ date: '9/16/19', bet: '$10', towin: '$11.50',  result: '$11.50', description: 'Panthers to win @ Cardinals'},
{ date: '9/22/19', bet: '$100', towin: '$21.74',  result: '$21.74', description: '@ Vikings to beat Raiders'},
{ date: '9/23/19', bet: '$20', towin: '$8',  result: '$8', description: 'Bears to win @ Washington'},
{ date: '9/23/19', bet: '$10', towin: '$9.52',  result: '$9.52', description: 'Bears @ Washington over 41'},
{ date: '9/23/19', bet: '$50', towin: '$15.63',  result: '$15.63', description: 'Patriots over @ Bills'},
{ date: '9/23/19', bet: '$20', towin: '$20',  result: '-$20', description: 'Patriots -7.5 over @ Bills'},
{ date: '9/23/19', bet: '$10', towin: '$4.55',  result: '$4.55', description: 'Seahawks over @ Cardinals'},
{ date: '9/23/19', bet: '$20', towin: '$7.41',  result: '$7.41', description: 'Chiefs over @ Lions'},
{ date: '9/23/19', bet: '$10', towin: '$3.45',  result: '-$10', description: '@ Colts to beat Raiders'},
{ date: '9/23/19', bet: '$30', towin: '$48',  result: '', description: 'Patriots to win the AFC'},
{ date: '9/23/19', bet: '$30', towin: '$82.50',  result: '', description: 'Chiefs to win the AFC'},
{ date: '9/23/19', bet: '$20', towin: '$66.60',  result: '', description: 'Patriots to win the Super Bowl'},
{ date: '9/26/19', bet: '$10', towin: '$9.52',  result: '-$10', description: 'Eagles @ Packers over 47'},
{ date: '9/26/19', bet: '$20', towin: '$15.38',  result: '-$20', description: '@ Packers -3.5 over Eagles'},
{ date: '9/29/19', bet: '$10', towin: '$8',  result: '$8', description: 'Patriots @ Bills under 40.5'},
{ date: '9/29/19', bet: '$10', towin: '$8.33',  result: '$8.33', description: 'Vikings @ Bears under 38.5'},
{ date: '9/29/19', bet: '$13.92', towin: '$16.01',  result: '-$13.92', description: 'Rams over @ Seahawks'},
{ date: '9/29/19', bet: '$7', towin: '$6.36',  result: '-$7', description: 'Bears @ Raiders Under 41'},
{ date: '9/29/19', bet: '$13.96', towin: '$5.91',  result: '-$13.96', description: 'Bears over @ Raiders'},
{ date: '9/29/19', bet: '$10', towin: '$2.22',  result: '$2.22', description: 'Two Team Parlay: Patriots over Washington and @ Eagles over Jets'},
{ date: '9/29/19', bet: '$100', towin: '$9.09',  result: '$9.09', description: 'Patriots over @ Washington'},
{ date: '9/29/19', bet: '$10', towin: '$6.25',  result: '$6.25', description: '@ Panthers over @ Jaguars'},
{ date: '9/29/19', bet: '$20', towin: '$16.67',  result: '$-20', description: '@ Chiefs -10.5 over Colts'}];


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
