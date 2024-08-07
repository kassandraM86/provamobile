const showHiddenPass=(inputPass,inputIcon)=>{
    const input =document.getElementById(inputPass),
    iconEye=document.getElementById(inputIcon)
}
iconEye.addEventListener('click',()=>{
    if (input.type ==='senha'){
        input.type='text'
        iconEye.classList.add('ri-eye-line')
        iconEye.classList.remove('ri-eye-off-line')
    }else{
        input.type='senha'
        iconEye.classList.remove('ri-eye-line')
        iconEye.classList.add('ri-eye-off-line')
    }
})

showHiddenPass('input-pass','input-icon')