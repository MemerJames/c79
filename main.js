name_student_array=[];

function submit(){
    var student_1=document.getElementById("name_1").value;
    var student_2=document.getElementById("name_2").value;
    var student_3=document.getElementById("name_3").value;
    var student_4=document.getElementById("name_4").value;
    
    name_student_array.push(student_1);
    name_student_array.push(student_2);
    name_student_array.push(student_3);
    name_student_array.push(student_4);

    console.log(name_student_array);

    document.getElementById("display_name").innerHTML=name_student_array;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_student_array.sort();

    console.log(name_student_array);

    document.getElementById("display_name").innerHTML=name_student_array;
   
    

}


