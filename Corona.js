updatemap();

function updatemap()
{
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp =>
        {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude=element.latitude;
                longitude=element.longitude;

                cases=element.infected;
                
                if(cases==undefined)
                {
                    color="rgb(50,205,50)"
                }
                if(cases<15)
                {
                    color="rgb(255,69,0)"
                }
                else if (cases>15)
                {
                    color="rgb(255,0,0)"
                }
                // else
                // {
                //     color="rgb(50,205,50)"
                // }


                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                    })
                    .setLngLat([longitude,latitude])
                    .addTo(map);
            });
        })
}