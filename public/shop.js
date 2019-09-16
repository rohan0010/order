
function fetchProducts (done) {
    $.get('/api/orders', function (data) {
        done(data)
    })
}

function addProduct (first_name,last_name, door_no,street_address,city,state,zip_code,email,plan_type, done) {
    $.post('/api/orders', {
        name: first_name,
        lastname: last_name,
        doorno: door_no,
        address: street_address,
        City: city,
        state: state,
        zipcode: zip_code,
        email: email,
        plan: plan_type,

    }, function (data) {
        done(data)
    })
}


