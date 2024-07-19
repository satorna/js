
var roleData = [
        {
            name:`Naaiiki`,
            level:6,
            element:'WIND',
            rings:'1',
            region:'SMT',
            headerInfo:{
                birthday:`湩历 06-43`,
                astrology:`风 - 星虹座SH02`,
                sex:`KEX`,
                animal:`白凤凰`,
                weapon:`和弦流锋`,
                region:`SMT云川`
            }
        },{
            name:`Amilia`,
            level:5,
            element:'WATER',
            rings:'1',
            region:'SMT',
            headerInfo:{
                birthday:`湩历 03-06`,
                astrology:`水 - 天河座SH01`,
                sex:`GDX`,
                animal:`碧羊`,
                weapon:`玄冰`,
                region:`SMT云川`
            }
        },{
            name:`Lemonade`,
            level:5,
            element:'ELECTRO',
            rings:'1_2',
            region:'SMT'
        },{
            name:`Enadohla`,
            level:7,
            element:'WIND',
            rings:'2_5',
            region:'BDK'
        },{
            name:`Osplanta`,
            level:6,
            element:'FIRE',
            rings:'3_2',
            region:'UNU'
        },{
            name:`Ketsh`,
            level:5,
            element:'ELECTRO',
            rings:'1_4',
            region:'BDK'
        },{
            name:`Satorni`,
            level:7,
            element:'WIND',
            rings:'7_2',
            region:'ddd'
        },{
            name:`Neptwna`,
            level:6,
            element:'WATER',
            rings:'2',
            region:'BTK'
        },{
            name:`Prikno`,
            level:6,
        },{
            name:`Kqetta`,
            level:6,
        },{
            name:`Kalonil`,
            level:6,
        },{
            name:`Motta`,
            level:6,
        },{
            name:`Hannabella`,
            level:6,
        },{
            name:`Lonicera`,
            level:5,
        }
    ];
var selectState = {
    region:`all`,
    stars:`all`,
    element:`all`,
    rings:`all`,
}
class Selector{
    region(info){
        document.getElementById(`region_${selectState.region}`).style.background = '';
        document.getElementById(`region_${selectState.region}`).style.color = 'rgb(50,50,50)';
        document.getElementById(`region_${info}`).style.background = 'rgb(50,50,50)';
        document.getElementById(`region_${info}`).style.color= 'white';
        selectState.region = info;
        this.showRoles(selectState);
    }
    stars(info){
        document.getElementById(`stars_${selectState.stars}`).style.background = '';
        document.getElementById(`stars_${selectState.stars}`).style.color = 'rgb(50,50,50)';
        document.getElementById(`stars_${info}`).style.background = 'rgb(50,50,50)';
        document.getElementById(`stars_${info}`).style.color= 'white';
        selectState.stars = info;
        this.showRoles(selectState);
    }
    element(info){
        document.getElementById(`element_${selectState.element}`).style.background = '';
        document.getElementById(`element_${selectState.element}`).style.color = 'rgb(50,50,50)';
        document.getElementById(`element_${info}`).style.background = 'rgb(50,50,50)';
        document.getElementById(`element_${info}`).style.color= 'white';
        selectState.element = info;
        this.showRoles(selectState);
    }
    rings(info){
        document.getElementById(`rings_${selectState.rings}`).style.background = '';
        document.getElementById(`rings_${selectState.rings}`).style.color = 'rgb(50,50,50)';
        document.getElementById(`rings_${info}`).style.background = 'rgb(50,50,50)';
        document.getElementById(`rings_${info}`).style.color= 'white';
        selectState.rings = info;
        this.showRoles(selectState);
    }
    initialize(){//初始化
        this.region(selectState.region);
        this.stars(selectState.stars);
        this.element(selectState.element);
        this.rings(selectState.rings);
    }
    showRoles(selectState){//展示筛选器范围内的角色
        document.getElementById('ctn').innerHTML = '';
        for(var i=0;i<roleData.length;i++){
            var s = '';
            for(var j=0;j<roleData[i].level;j++){
                s += '✦';
            }
            var factor = 
                (roleData[i].rings == selectState.rings || selectState.rings == 'all') && 
                (roleData[i].element == selectState.element || selectState.element == 'all') && 
                (roleData[i].level == selectState.stars || selectState.stars == 'all') && 
                (roleData[i].region == selectState.region || selectState.region == 'all')
            ;
            if(factor){
                var d = `<div id="scndctn" onclick="window.open('${roleData[i].name}.html');">
                    <div id="lines2"></div>
                    <div id="scndctn_main">
                        <img src="https://satorna.github.io/image/avatar_${roleData[i].name}.jpg">
                        <p>${roleData[i].name}</p>
                        <div id="stars">
                            ${s}
                        </div>
                    </div>
                    <div id="lines2"></div>
                </div>`;
                document.getElementById('ctn').innerHTML += d;
            }
        }
    }
}
var select = new Selector();
//select.initialize();
