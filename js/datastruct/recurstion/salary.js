// 재귀적 호출, 재귀 순회

let company = {
    sales: [
        {
            name: "Junseo",
            salary: 2000,
        },
        {
            name: "EunChae",
            salary: 1500,
        }
    ],

    development: {
        sites: [
            {
                name: "Junyeong",
                salary: 1400,
            },
            {
                name: "Dongchan",
                salary: 1600,
            }
        ],
        internals: [
            {
                name: "Donghan",
                salary: 1700,
            }
        ]
    },
}


function sumSalaries (department) {
    // 배열인지 확인
    if (Array.isArray(department)) {
        return department.reduce((prev, cuv) => prev + cuv.salary, 0);
    } else {
        // 객체일 경우 배열로 반환 후, sumSalaries 재귀 호출
        let sum = 0;
        for (let x of Object.values(department)) {
            sum += sumSalaries(x);
        }
        return sum;
    }
}

function pow (base, exp) {
    if (exp === 1) {
        return base;
    } else {
        return base * pow(base, exp - 1);
    }
}
