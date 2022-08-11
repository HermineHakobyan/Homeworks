const but = document.querySelector("#bt");
const male = document.querySelector("#man");
const female = document.querySelector("#woman");
const userName=["Կարո", "Արմեն", "Կարեն", "Ալեքս","Ղուկաս", "Աննա","Լիանա","Անի", "Սյուզի", "Հերմինե"];
const userSurname=["Հակոբյան", "Կարապետյան","Աբրահամյան","Բարսեղյան", "Մկրտչյան" ];

but.addEventListener("click", ev =>{
    const arrMale = ["Կարո", "Արմեն", "Կարեն", "Ալեքս","Ղուկաս"];
    let mName = userName[parseInt(Math.random() * userName.length)];
    let surname = userSurname[parseInt(Math.random() * userSurname.length)];
    arrMale.includes(mName)? male.textContent = `${mName} ${surname}`:
    female.textContent =`${mName} ${surname}`;

});
