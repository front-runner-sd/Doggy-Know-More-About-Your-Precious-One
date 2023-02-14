async function Search() {
  try {
    const des = document.getElementById("des");
    const imgs = document.getElementById("imgs");
    const errorEle = document.getElementsByTagName("h4")[0];
    const data = document.getElementsByTagName("h6");

    var raw_data = document.getElementById("input").value;

    const processed_data = raw_data.toLowerCase().trim();
    const breed = processed_data.replace(/ /g, "/");

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${breed}/images/random/3`
    );
    if (res.body.message.length == 0) {
      des.style.visibility = "hidden";
      imgs.style.visibility = "hidden";
      errorEle.style.visibility = "visible";

      errorEle.innerText = `Sorry there is no data about ${
        document.getElementById("input").value
      } , Maybe there was a spelling mistake !`;
      return;
    } else {
      des.style.visibility = "visible";
      imgs.style.visibility = "visible";

      if (errorEle) errorEle.style.visibility = "hidden";

      document.getElementById("i1").src = res.body.message[0];
      document.getElementById("i2").src = res.body.message[1];
      document.getElementById("i3").src = res.body.message[2];

      var flag = 0;
      fetch("./data.json")
        .then((response) => response.json())
        .then((json) => {
          for (var ele in json) {
            if (json[ele].breed == breed) {
              const data = document.getElementsByTagName("h6");
              data[0].innerText = json[ele].char;
              data[1].innerText = json[ele].weight;
              data[2].innerText = json[ele].life;
              document.getElementsByTagName(
                "h1"
              )[0].innerText = `About ${processed_data}`;

              flag = 1;
              return;
            }
          }
          if (flag == 0) {
            data[0].innerText = `Sorry There is no data available about ${breed} species`;
            data[1].innerText = `Sorry There is no data available about ${breed} species`;
            data[2].innerText = `Sorry There is no data available about ${breed} species`;
            document.getElementsByTagName(
              "h1"
            )[0].innerText = `About ${processed_data}`;
          }
        });
      flag = 0;
    }
  } catch (err) {
    console.log("error : ", err);
    des.style.visibility = "hidden";
      imgs.style.visibility = "hidden";
      document.getElementsByTagName("h4")[0].style.visibility = "visible";

      document.getElementsByTagName("h4")[0].innerText = `Sorry there is no data about ${
        document.getElementById("input").value
      } , Maybe there was a spelling mistake !`;
  }
}
