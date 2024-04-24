 "use strict"
window.addEventListener('DOMContentLoaded', ()=>{
    const bannerBtn = document.querySelector('.banner .bannerBtn'),
          mainBlok = document.querySelector('.mainBlok'),
          asosiyQism = document.querySelector('.asosiyQism'),
          listBtn = document.querySelectorAll('.firstList'),
          secondBtn = document.querySelectorAll('.secondList'),
          mainLoader = document.querySelector('.mainLoader'),
          secondLoader = document.querySelector('.asosiyQism .mainLoader')

    function firstLoader(){
        // for loader code js start
        setTimeout(() => {
            mainLoader.classList.add('active')
            setTimeout(() => {
                mainLoader.classList.remove('active')
            }, "600");
        }, "0");
        // for loader code js end 
    }
    firstLoader()
    bannerBtn.addEventListener("click", ()=>{
        firstLoader()
        mainBlok.classList.add('active');
        asosiyQism.classList.remove('active')
        removeBlok();
        fakultetlar.style.display = 'block';
        mainListMainMenu.style.display = 'block';
        mainListFaculties.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        secondBtn.forEach((item)=>{
            item.style = `
                background: rgb(230, 234, 236);
                color: rgb(26,43,99);
            `
        })
        listBtn.forEach((item)=>{
            item.style = `
                background: rgb(26,43,99);
                color: rgb(230, 234, 236);
            `
        })
    })
    listBtn.forEach((item)=>{
        item.addEventListener("click", ()=>{
            // for loader code js start
            setTimeout(() => {
                mainLoader.classList.add('active')
                setTimeout(() => {
                    mainLoader.classList.remove('active')
                }, "600");
            }, "0");
            // for loader code js end 
            mainBlok.classList.remove('active');
            asosiyQism.classList.add('active')
        })
    })
    function loaderSecond(){
        // for loader code js start
        setTimeout(() => {
            secondLoader.classList.add('active')
            setTimeout(() => {
                secondLoader.classList.remove('active')
            }, "600");
        }, "0");
        // for loader code js end 
    }

    

    const fakultetlar = document.querySelector('.mainSection.fakultetlar'),
        matematika = document.querySelector('.mainSection.matematika'),
        tabiiy = document.querySelector('.mainSection.tabiiy'),
        pedagogika = document.querySelector('.mainSection.pedagogika'),
        xorijiy = document.querySelector('.mainSection.xorijiy'),
        boshlangich = document.querySelector('.mainSection.boshlangich'),
        maktabgacha = document.querySelector('.mainSection.maktabgacha'),
        filologiya = document.querySelector('.mainSection.filologiya'),
        jismoniy = document.querySelector('.mainSection.jismoniy'),
        tarix = document.querySelector('.mainSection.tarix'),
        magistratura = document.querySelector('.mainSection.magistratura'),
        sirtqi = document.querySelector('.mainSection.sirtqi'),
        MatematikaCouse = document.querySelector('.mainSection.MatematikaCouse'),
        tabiiyFullFirst = document.querySelector('.mainSection.tabiiyFull.first'),
        tabiiyFullSecond = document.querySelector('.mainSection.tabiiyFull.second'),
        mainSectionPedagogikaFullForPedBtn = document.querySelector('.mainSection.pedagogikaFull.forPedBtn'),
        mainSectionPedagogikaFullTasviriyBtn = document.querySelector('.mainSection.pedagogikaFull.tasviriyBtn'),
        mainSectionPedagogikaFullTexnologikBtn = document.querySelector('.mainSection.pedagogikaFull.texnologikBtn'),
        mainSectionPedagogikaFullPsixologiyaBtn = document.querySelector('.mainSection.pedagogikaFull.psixologiyaBtn'),
        mainSectionPedagogikaFullMusiqaBtn = document.querySelector('.mainSection.pedagogikaFull.musiqaBtn')

    // forBtn start
    const itemInformatikaBtn = document.querySelector('.item.informatikaBtn'),
        itemTabiiyBtn = document.querySelector('.item.tabiiyBtn'),
        itemPedagogikaBtn = document.querySelector('.item.pedagogikaBtn'),
        itemXorijiyBtn = document.querySelector('.item.xorijiyBtn'),
        itemBoshlangichBtn = document.querySelector('.item.boshlangichBtn'),
        itemMaktabgachaBtn = document.querySelector('.item.maktabgachaBtn'),
        itemFilologiyaBtn = document.querySelector('.item.filologiyaBtn'),
        itemJismoniyBtn = document.querySelector('.item.jismoniyBtn'),
        itemTarixBtn = document.querySelector('.item.tarixBtn'),
        itemMagistraturaBtn = document.querySelector('.item.magistraturaBtn'),
        itemSirtqiBtn = document.querySelector('.item.sirtqiBtn'),
        itemListInformatikaListBtn = document.querySelector('.itemList.informatikaListBtn'),
        itemListBiologiyaBtn = document.querySelector('.itemList.biologiyaBtn'),
        itemListKimyoBtn = document.querySelector('.itemList.kimyoBtn'),
        itemListPedagogikaBtn = document.querySelector('.itemList.pedagogikaBtn'),
        itemListTasviriyBtn = document.querySelector('.itemList.tasviriyBtn'),
        itemListTexnologikBtn = document.querySelector('.itemList.texnologikBtn'),
        itemListPsixologiyaBtn = document.querySelector('.itemList.psixologiyaBtn'),
        itemListMusiqaBtn = document.querySelector('.itemList.musiqaBtn')

    // liBtn start 
    const mainListFaculties = document.querySelector('.mainList.faculties'),
        mainListMainMenu = document.querySelector('.mainList.mainMenu'),
        liBtnMath = document.querySelector('.liBtnMath'),
        liBtnTabiiy = document.querySelector('.liBtnTabiiy'),
        liBtnPedagogika = document.querySelector('.liBtnPedagogika'),
        liBtnXorijiy = document.querySelector('.liBtnXorijiy'),
        liBtnBoshlangich = document.querySelector('.liBtnBoshlangich'),
        liBtnMaktabgacha = document.querySelector('.liBtnMaktabgacha'),
        liBtnFilologiya = document.querySelector('.liBtnFilologiya'),
        liBtnJismoniy = document.querySelector('.liBtnJismoniy'),
        liBtnTarix = document.querySelector('.liBtnTarix'),
        liBtnMagistratura = document.querySelector('.liBtnMagistratura'),
        liBtnSirtqi = document.querySelector('.liBtnSirtqi'),
        listForMenu = document.querySelectorAll('.listForMenu li')
   

    // open table btns start
    const openTableMathFirstBtn = document.querySelector('.itemList.openTableMathFirstBtn')


    // table couse start page start
    const tableMathFirst = document.querySelector('.mainSection.tableMathFirst')



    function removeBlok(){
        fakultetlar.style.display = 'none'; 
        matematika.style.display = 'none';
        tabiiy.style.display = 'none';
        pedagogika.style.display = 'none';
        xorijiy.style.display = 'none';
        boshlangich.style.display = 'none';
        maktabgacha.style.display = 'none';
        filologiya.style.display = 'none';
        jismoniy.style.display = 'none';
        tarix.style.display = 'none';
        magistratura.style.display = 'none';
        MatematikaCouse.style.display = 'none';
        tabiiyFullFirst.style.display = 'none';
        tabiiyFullSecond.style.display = 'none';
        sirtqi.style.display = 'none';
        mainListFaculties.style.display = 'none';
        mainListMainMenu.style.display = 'none';
        mainSectionPedagogikaFullMusiqaBtn.style.display = 'none';
        mainSectionPedagogikaFullForPedBtn.style.display = 'none';
        mainSectionPedagogikaFullTexnologikBtn.style.display = 'none';
        mainSectionPedagogikaFullPsixologiyaBtn.style.display = 'none';
        mainSectionPedagogikaFullTasviriyBtn.style.display = 'none';
        tableMathFirst.style.display = 'none';
    }

    secondBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            loaderSecond()
            removeBlok();
            fakultetlar.style.display = 'block';
            mainListMainMenu.style.display = 'block';
            mainListFaculties.style.display = 'none';
            listForMenu.forEach((i)=>{
                i.style = `
                background: rgb(26,43,99);
                color: rgb(230, 234, 236);
            `
            })
            item.style = `
                background: rgb(230, 234, 236);
                color: rgb(26,43,99);
            `
        })
    })

    //  matematika va informatika fakulteti start
    itemInformatikaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        matematika.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnMath.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnMath.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        matematika.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnMath.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    itemListInformatikaListBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        MatematikaCouse.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnMath.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    openTableMathFirstBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        tableMathFirst.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236); ,
        `
        })
        liBtnMath.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })  
    // Matematika va informatika end 

    // Tabiiy fanlar fakulteti start 
    itemTabiiyBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        tabiiy.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnTabiiy.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnTabiiy.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        tabiiy.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnTabiiy.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    itemListBiologiyaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        tabiiyFullFirst.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnTabiiy.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    itemListKimyoBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        tabiiyFullSecond.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnTabiiy.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // tabiiy fanlar fakulteti end 

    // Pedagogika fakulteti start 
    itemPedagogikaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        pedagogika.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnPedagogika.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnPedagogika.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        pedagogika.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnPedagogika.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    itemListPedagogikaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        mainSectionPedagogikaFullForPedBtn.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnPedagogika.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    itemListTasviriyBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        mainSectionPedagogikaFullTasviriyBtn.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnPedagogika.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    itemListTexnologikBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        mainSectionPedagogikaFullTexnologikBtn.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnPedagogika.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    itemListPsixologiyaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        mainSectionPedagogikaFullPsixologiyaBtn.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnPedagogika.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    itemListMusiqaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        mainSectionPedagogikaFullMusiqaBtn.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnPedagogika.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Pedagokika fakulteti end 

    // Xorijiy til va adabiyoti fakulkteti start
    itemXorijiyBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        xorijiy.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnXorijiy.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnXorijiy.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        xorijiy.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnXorijiy.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Xorijiy til va adabiyoti fakulkteti end

    // Boshlang'ich ta'lim fakulteti start 
    itemBoshlangichBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        boshlangich.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnBoshlangich.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnBoshlangich.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        boshlangich.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnBoshlangich.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Boshlang'ich ta'lim fakulteti end 

    // Maktabgacha ta'lim fakulteti start
    itemMaktabgachaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        maktabgacha.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnMaktabgacha.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnMaktabgacha.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        maktabgacha.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnMaktabgacha.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Maktabgacha ta'lim fakulteti end

    // Filologiya fakulteti start 
    itemFilologiyaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        filologiya.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnFilologiya.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnFilologiya.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        filologiya.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnFilologiya.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Filologiya fakulteti end 

    // Jismoniy madaniyat fakulteti start 
    itemJismoniyBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        jismoniy.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnJismoniy.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnJismoniy.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        jismoniy.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnJismoniy.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Jismoniy madaniyat fakulteti end 

    // Tarix fakulteti start 
    itemTarixBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        tarix.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnTarix.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnTarix.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        tarix.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnTarix.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Tarix fakuleti end 

    // Magistratura bo'limi start 
    itemMagistraturaBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        magistratura.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnMagistratura.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnMagistratura.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        magistratura.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnMagistratura.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Magistartura bo'limi end 

    // Sirtqi bo'lim start 
    itemSirtqiBtn.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        sirtqi.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnSirtqi.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    liBtnSirtqi.addEventListener('click', ()=>{
        loaderSecond()
        removeBlok();
        sirtqi.style.display = 'block';
        mainListFaculties.style.display = 'block';
        mainListMainMenu.style.display = 'none';
        listForMenu.forEach((i)=>{
            i.style = `
            background: rgb(26,43,99);
            color: rgb(230, 234, 236);
        `
        })
        liBtnSirtqi.style = `
            background: rgb(230, 234, 236);
            color: rgb(26,43,99);
        `
    })
    // Sirtqi bo'lim end

    



})
