/**
 * 클래스를 끝낸 기념문제
 * 1. Country 클래스는 나라이름과 나라에 해당되는 아이돌 그룹정보를 리스트로 갖고 있다. (name , idolGroups)
 * 2. IdolGroup 클래스는 아이돌 그룹 이름정보와 맴버정보를 리스트로 갖고 있다.
 * (name, members)
 * 3. Idol 클래스는 아이돌 이름과 출생연도 정보를 갖고 있다.
 * (name, year)
 * 4. boyIdol 클래스는 Idol클래스와 동일하게 name, year프로퍼티가 있고,
 * 추가로 sing()함수를 갖고 있다. 실행하면 ${이름}이 노래를 합니다.스트링 반환
 * 5. girlIdol 클랫느느 Idol 클래스와 동일하게 name,year프로퍼티를 갖고 있다.
 * 추가로 dance()함수 갖고 있다.
 */

// 아이브는 한국 아이돌,   그룹명 아이브,  여자아이돌이다.
const iveMembers =[
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '장원영',
        year: 2002,
    },
    {
        name: '이서',
        year: 2003,
    },
    {
        name: '레이',
        year: 2003,
    },
]

const btsMembers =[
    {
        name:'진',
        year: 1992,
    },
    {
        name:'뷔',
        year: 1992,
    },
    {
        name:'알엠',
        year: 1992,
    },
    {
        name:'정국',
        year: 1992,
    },
]

class Country{
    name;
    idolGroups;
    constructor(name, idolGroups){
        this.name = name;
        this.idolGroups = idolGroups
    }
}

class IdolGroups{
    name;
    members;
    constructor(name, members){
        this.name = name;
        this.members = members;
    }
}

class Idol{
    name; 
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class GirlIdol extends Idol{

    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
class BoyIdol extends Idol{
    sing(){
        return `${this.name}이 노래를 부릅니다.`;
    }
}

const iveMembersList = iveMembers.map((x)=> 
    new GirlIdol(x['name'], x['year']));
const  btsMembersList = btsMembers.map(
    (x)=> new BoyIdol(x['name'], x['year']),
);

console.log(iveMembersList);

//
const iveGroup = new IdolGroups('ive', iveMembersList);
const btsGroup = new IdolGroups('bts', btsMembers);

console.log(iveGroup);

//
const korea = new Country('Korea', [iveGroup, btsGroup]);
console.log(korea);


//
const allTogether = new Country(
    'Korea',
    [
        new IdolGroups(
            'ive',
            iveMembers.map((x)=> new GirlIdol(x['name'],x['year']))
        ),
        new IdolGroups(
            'bts',
            btsMembers.map((x)=> new BoyIdol(x['name'],x['year']))
        ),

    ]
);

console.log(allTogether);