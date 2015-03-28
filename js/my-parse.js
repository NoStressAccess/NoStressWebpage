function test(){
    Parse.initialize("QmRJWlbGKutIskPEnDT7zn5EwWOD56wZ487AZz4V", "h6xyXmXgMxRFUjK6ufJTUcc5dqGF1wMTdT5bkjWF");

    var Magic = Parse.Object.extend("Magic");
    var magic = new Magic();
    magic.save({daphne: "HI!", deb:"HELLO!"},
        success: function(object){
        // $(".success").show();
        console.log("yay");
    },
    error: function(model, error){
        // $(".error").show();
        console.log("nay");
    });
}
