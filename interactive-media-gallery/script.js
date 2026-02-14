const filterButtons = document.querySelectorAll('button');
const galleyItems = document.querySelectorAll('.gallery-container div');

filterButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const filterValue = button.dataset.filter;

        galleyItems.forEach(item => {
            const category = item.dataset.category;

            if (filterValue === 'all' || filterValue === category){
            item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        })
    })
})