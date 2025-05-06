
fetch(`https://restcountries.com/v3.1/independent?status=true`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.sort((a, b) => {
            if (a.name.common < b.name.common) {
                return -1;
            }
            if (a.name.common > b.name.common) {
                return 1;
            }
            return 0;
        })

        console.log(data);
        let countries = [];

        for (let i = 0; i < data.length; i++) {
            countries.push(data[i].name.common);
        }

        countries.sort((a, b) => a.localeCompare(b));
        console.log(countries);

        document.getElementById("data").innerHTML = data[12].flag
          

    })

    .catch((error) => {
        throw error;
    });

