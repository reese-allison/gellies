const moji = (body='basic-body', mouth='basic-mouth', eyes='basic-eye') =>{
    let moji = `
        <svg width="477" height="509" viewBox="-50 -50 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="slime" class="slime">
                ${body}
                ${mouth}
                ${eyes}
            </g>
        </svg>
    `;
    Promise.all([
        fetch('/svg/bodies/basic-body.html').then(resp => body = resp),
        fetch('/svg/mouths/basic-mouth.html').then(resp => mouth = resp),
        fetch('/svg/eyes/basic-eye.html').then(resp => eyes = resp)
    ]).then(
        console.log(moji)
    )
};
