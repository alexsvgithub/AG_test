 $(document).ready(function() {
    
    $(".trigger").click(function() {
        $(".chatBox").removeClass("hideClass");
        $(".chatBox").addClass("showClass");
    });

    $(".triggerr").click(function() {
        $(".chatBox").removeClass("showClass");
        $(".chatBox").addClass("hideClass");
    });
  });


