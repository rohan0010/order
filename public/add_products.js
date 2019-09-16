$(function () {
    let first_name = $('#first_name')
    let last_name = $('#last_name')
    let door_no = $('#door_no')
    let street_address= $('#street_address')
    let city = $('#city')
    let state = $('#state')
    let zipcode = $('#zipcode')
    let email = $('#email')
    let plan_type = $('#plan_type')
    
    $('#btnProductAdd').click(function () {

        addProduct(
            first_name.val(),
            last_name.val(),
            door_no.val(),
            street_address.val(),
            city.val(),
            state.val(),
            zipcode.val(),
            email.val(),
            plan_type.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            }
        )


    })

})