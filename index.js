// BT1: HIỂN THỊ CÁC SỐ CHẴN VÀ LẺ NHỎ HƠN 100
// C1:
document.getElementById("btnSoChan").onclick = function () {
  let soChan = "";
  for (let i = 0; i < 100; i += 2) {
    soChan += i + ` `;
  }
  document.querySelector(".ketQuaSoChan").innerHTML = soChan;
};
document.getElementById("btnSoLe").onclick = function () {
  let soLe = "";
  for (let i = 1; i < 100; i += 2) {
    soLe += i + ` `;
  }
  document.querySelector(".ketQuaSoLe").innerHTML = soLe;
};
/*C2:
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      soChan += i + ` `;
    }
  }
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
       soLe += i + ` `;  
  } */
// BT2: TÍNH TỔNG CÁC SỐ CHẴN TỪ 1 TỚI N (N NGƯỜI DÙNG NHẬP)
document.getElementById("btn4").onclick = function () {
  let soN = document.getElementById("soN2").value * 1;
  let tongChan1DenN = 0;
  for (let i = 0; i <= soN; i += 2) {
    tongChan1DenN += i;
  }
  console.log(tongChan1DenN);
  document.querySelector(
    ".ketQua4"
  ).innerHTML = `Tổng từ 1 đến số N: ${tongChan1DenN}`;
};
// BT3: TỪ 1 ĐẾN 1000 CÓ BAO NHIÊU SỐ CHIA HẾT CHO 3
document.getElementById("btn5").onclick = function () {
  let count = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0) {
      count++;
    }
  }
  document.querySelector(
    ".ketQua5"
  ).innerHTML = `Từ 1 đến 1000 có [${count}] số chia hết cho 3`;
};
// BT4: TẠO 10 THẺ DIV (THẺ DIV LẺ: MÀU XANH & THẺ DIV CHẴN: MÀU ĐỎ)
document.getElementById("btn6C1").onclick = function () {
  let divXanh = `<div class="p-2 bg-success"></div>`;
  let divDo = `<div class="p-2 bg-danger"></div>`;
  let theDiv = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      theDiv += divDo;
    } else {
      theDiv += divXanh;
    }
  }
  document.querySelector(".ketQua6C1").innerHTML = theDiv;
};
document.getElementById("btn6C2").onclick = function () {
  for (let i = 1; i <= 10; i++) {
    let theDiv = document.createElement("div");
    if (i % 2 == 0) {
      theDiv.className = "p-2 bg-danger";
    } else {
      theDiv.className = "p-2 bg-primary";
    }
    document.querySelector(".ketQua6C2").appendChild(theDiv);
  }
};
// BT5: TÌM SỐ N NHỎ NHẤT SAO CHO TỔNG TỪ 1 ĐẾN N > 10000 (vd: 1+2+3+4=10 => 1+2+3+4+5=15 => n=5 )
document.getElementById("btn7").onclick = function () {
  console.log(`bắt đầu`);
  let total = 0;
  let ketQua = "";
  let i = 1;
  do {
    total += i;
    if (total > 10000) {
      ketQua += i;
      console.log(ketQua);
    }
    i++;
  } while (total <= 10000);
  document.querySelector(
    ".ketQua7"
  ).innerHTML = `Số N nhỏ nhất để tổng từ 1 đến N > 10000 là: ${ketQua} `;
};
// C1: LOOP DO ... WHILE
let total2 = 0;
let i2 = 1;
do {
  total2 += i2;
  if (total2 > 10000) {
    console.log(i2);
  }
  i2++;
} while (total2 <= 10000);
// C2: LOOP FOR
let total3 = 0;
for (let i = 1; total3 <= 10000; i++) {
  total3 += i;
  if (total3 > 10000) {
    console.log(i);
  }
}
// C3: LOOP WHILE
let total4 = 0;
let z = 1;
while (total4 <= 10000) {
  total4 += z;
  if (total4 > 10000) {
    console.log(z);
  }
  z++;
}
//BT6 (Slide 15): NHẬP SỐ NGUYÊN X, SỐ MŨ N SAU ĐÓ TÍNH TỔNG S(N) = X + X^2 + X^3 +...+ X^N
document.getElementById("btn8").onclick = function () {
  let soX = document.getElementById("soX").value * 1;
  let soN = document.getElementById("soN3").value * 1;
  let tongSoMu = 0;
  for (let index = 1; index <= soN; index++) {
    tongSoMu += Math.pow(soX, index);
  }
  console.log(tongSoMu);
  document.querySelector(".ketQua8").innerHTML = `Tổng số mũ: ${tongSoMu}`;
};
//BT7 (Slide 15): TÍNH GIAI THỪA TỪ 1 ĐẾN N 1 x 2 x 3 x ... x N
document.getElementById("btn9").onclick = function () {
  let soN = document.getElementById("soN4").value * 1;
  let giaiThua = 1;
  for (let z = 1; z <= soN; z++) {
    giaiThua *= z;
  }
  console.log(giaiThua);
  document.querySelector(
    ".ketQua9"
  ).innerHTML = `Giai thừa từ 1 đến N là ${giaiThua}`;
};
//BT8 (Slide 15): NHẬP SỐ N VÀ HIỂN THỊ CÁC SỐ TỰ NHIÊN TỪ 1 ĐẾN SỐ N
document.getElementById("btn10").onclick = function () {
  let soN = document.getElementById("soN5").value * 1;
  let list1DenN = "";
  for (let z = 1; z <= soN; z++) {
    list1DenN += z + ` `;
  }
  document.querySelector(".ketQua10").innerHTML = list1DenN;
};
