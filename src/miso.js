function Miso() {
  this.startX = 0;
  this.startY = 0;

  this.offsetX = 0;
  this.offsetY = 0;

  this.minBoundX = 0;
  this.minBoundY = 0;

  this.maxBoundX = 0;
  this.maxBoundY = 0;

  this.chatroomW = 416;
  this.chatroomH = 738;

  this.headerH = 50;

  this.dragElement = null;

  this.oldZIndex = 0;

  this.url = null;
  this.visible = false;
  this.created = false;

  this.isMobile = false;

  this.moveIconID = "misoMoveIcon";
  this.closeIconID = "misoCloseIcon";

  this.originalBodyStyle = document.body.style.cssText;

  this.img = {
    close: "data:image/png;base64,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",
    close_h: "data:image/png;base64,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",
    move: "data:image/png;base64,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",
    move_h: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAFpOLgnAAAAAXNSR0IArs4c6QAACftJREFUaAW1WmuMVdUVXudyZ8AHjDwCPmYqA0khFSuK9VlbiJEoiUK1TRUkAhp/+Eo1PlDBH4qVkR8lKv4TMQFboy2DiVMKabDaYjS+W6U+cNAZ60BgYJjqwMw4x+/b+65z93nsw71XXMmdvfdaa7/Xc58RceCzrvCw05SADSDD360ro1cvEpl0YhAUiFLCC3daBrZ37Q5vKuhQf7lL5JOvRJb+yjIMhbKmgO7D2bxylUjXAZGVGy0RE27NnbPEhjn2hDdzYZ/tDrdESK3s6gofa98d/k3bRVbIfds6i2p9PQznnRsEQXJvJHN/Zm9sLLjI/li/Z72IGYqNDa+Cy6xVpOVa1Hkkl04nSQSbNIAzus/W8NcsF4tQRKmzbZKohGTJkRUXnQ4RevhKdEsuhT9zUxj98awO3J0Lm98V2faBXWoBlzHFJebVO/daarS89z8XWbstr4s9aC4v2hzZ9SC4jM3viExrEln4y9LoOM7m8cEjmcN2d4cNuPSd7V3hXvyuSTJFs2CGK0DclGRgG0zdzScGY0t1EYy4ATczf/mfRHoPpbtQWAjRPrj+vHshMzth1y1UkrC3j6g4zDsn3qbkYRX3GLFc/lycyFbrG3Hc4UHbjsRVyVdfKDIskm6RenA87dxTqsN7uMgdnbb7iDqRQwM6lC3NWLPPKCPJ/JvzRR5dmGYmV9C5L2zsH5COik5JpM9cnIqFr1PqHjgVLm8Ix2YGeGKzyMFvRG68RGTcSFLtpbE0DKwowKr0SyjYroX6OmlqHBuUjiGjgzKyhPCthS4vdnFZdUjAUF1RTnUHdvlSq1JZVCZKzpOwfl/tV0y85K3MOTOOCybIMc1BEElyNImrFQOQnrvWxztW0po+UWTRTMuJ3YXNE6yTMJO4x+LTpkomUR4a3eFF2zLaRwNwoF8OENUC7fYdi6Gj85s7RV77WOT4ESL//dIOlPVXRQtiMlDoGZC3lck3wSMLLAe1lvrVuc9O0HCsyFXnae94SfE0AKkrQPQa4uR4i+YhcpkgDX5bpvdAxi/02G3KvwL19lZtZJU0KRyMcBy8dXGYrdMIEO54xpbJv1QwhQJs6R8p50RE56jURPk1Qg8eFyFpZSzW/qVXUw2mYkYiDAnbB8UbQ7Z1L4u8u4u16sFdKOKU0c2jgwPRJByuPQxHhLslMty0tg/AQajV9U2pPlnpOJnt0BGYZAuxSRTJEpq/kvbfxeXVMVCfDJeTufIkn3cSl9E40EAWQRJn4EhHYqWdQSgvjaqX5WPGBD0ub1bdOwmNP8zL59iN44WyhjBW9mkI0JJsqscKu0Lg6+jBz4UZeTFJi+0kefFkbntHZMt7yW62fdJokZtm4/yOKdNxlM/i0ks2wuJjk6irI6mSMEqHHgk79tDV2sLxJCaKJnHdYq16sgoGFM5LITo6c6klcTUTMqSsVRETPgg23YKZRPWBSsdJvg/QHynQT7FeYIqhSGp3Hsz9GWKwu/M4bPiowZ7GBwVkCn/Qbnnm4yeNIq/ssGnHE9drj+ySMYECnWJRQxnG1HnwYael0grf8lQeZ9y7wuuuiLT5g47sjowJ6UeyYM0NWdg4DuI8JxK4jlK+4bIsniVCF+sGz9N+VE7feHybYELntri94nUIVWM0CQfbczDOwFiZ/n31S2X8by8QeW67bbPP4YEyLasGveiNjqtpbBaLyL0bRNTVkkPdL+snw8UlI37iYxDIW9Ekl50VI8UadLXuRAyHCBr025bnbyjrmCduJVl9sodV+qGoPLpxo0QuO9PHZfFuQsEYogCRXKJd6EZ9wMybR8dQ5/nXfFwWr7ExJMsEKAVG4ricPpLzJtFh3cRJcW65BBKpwEifdXsn8M1KcKMNxVVaTp8o8lMzrPGG3ZpKmElM2OI8QNQyEU9h0czycjQ3JgYnVQaY/H9BeaAJFmiRj2SVGb0/CIelUTx7evOT0rjSvie8NxyS32ub5d5ekb8iLO9AoM2QtWmcyGlNIrNOc7mMR4xyEpcS24kS2veHJ8hh+R8EyvHeSs0uIUkt8O1Ls6iZkyijyYkHZS0stRM+KxUlc49Abp84PljjYFPV3ElS3AkEFzE4KFdAGeaBNFPdRoLN38QiQXwZ0tdaLMqLKo3+Dn5KVRsxV9UvS7Hg26q5Lv/0aQoW1IdbeEzqZWVWWJ3uYTEVbYRCjcU/DA3K5aeg//sLZJRwfz0wU7RymqPR84zCrwHS2ggFOB2u70gmGfLKGe/3Pqo5u/IujEGx7JG/u+rv9DNZ0bb/4GERv7wQx+3jq9NUzJpmf67ZcPmxqe0yXi52nzlidLeh9SyzorRKbJny1lomU0N3HL4iZ91Q7EZK5mon5B/RQRxqDfLjo1TXomtyPYf2xqK7kZpOdnUo2ojJDgfk46QSV5MG6URHu1wyq+xrdWwsvK+uTn6sls5sxJfiHg0xYoxLOFLkYbn8f7PEjWGQvkeajZhvKwmH1AY3u+V9/8B5FH4uufJckRmTbfrAbIAZ8j8+FNn4evmrSd4YWbSsd05Yta2TJgSzA75kQJyedTvSjK74s4uprs5wuQAv9w1erPQTCr8HmeAfUe6h/urGc7mXXZU22zi3+YUwSD8pM+ipFqaeUo73GftzE0mgT9FNcLPMPquFrLVxDwW8I6XSEUZulQLzO+YR/HCY9U7I11D3RVTHJe/+r0UeR/rs5ohK95VZa+MeihCrkclOB03ykMSm21Tky8+2sk9lHAZxSgKTV4Kb+lmMyLcI0viuTBM7+rjKDELW2riHIjS/E957kg7OsnGsyKddLia7TkvEH9P7GRiBevX/Q3FeV0dcyiiEKvdD3t/4FC/2rS4lv861JQF76ChiE20g3OISmQhUshHtw6zxSJmj8mrJk+Vrf7XAtSUBotVWOKFelsGEQWLLwGyG5rJW4GSrFkJcjheTizMf50vC6sUiNAq1AteUzLS4dr4Vw3LZ/wdAXh5LXPgQRlH5PgEhlfjaX9hlr3+lgieRnB0ymKTpdV9qyQ6fdfPECcGTZiNE8HkQSoMzKwM3seKF7A/EZa4fvsYX4GW/jifUnBWLjx7So42Q4PuucDRCFY5fC2SFJhwHCh7LrWMbIQO/YIKpNZlE8Wvmhn/W/grNsasBRr4Lfh57HjfdsbYQa5uX/MqQ2ohOhtsx/3ugbbdkREwrlfU/CS5ftXWKEE25viol+2MTqa8XyuPdCBlKWeJTOIH52iFZ0ii8ugMpLp6QfR9Xk320TSvElPeiqWklVh6W3ACyw+t92aHhcTvk1Y3IQblgEFJJV16/Wmk44W4an6QI+cbLvRFfp1IS9iDMxnW4rYKPrxo8Tn0ITw3PIFl6QJOlqvpXw5zHy+8hPf0yB6d4ATY4BSc0GQtrQNvEcmj3At+D9k7gP0J7e0O9tFXy0TNvXqV9B1qTkzw3djadAAAAAElFTkSuQmCC"
  }
}

/**
 * 聊天室初始化
 * @param {string} url host
 * @param {object} params 聊天室參数
 */
Miso.prototype.init = function (url, params) {
  if (typeof url !== "string") {
    throw new Error("請输入聊天室網址");
  }

  if (!params || params.constructor.name !== "Object") {
    throw new Error("傳入參數錯誤");
  }

  if (this.created) {
    return;
  }

  this._createElement(url, params);
};

/**
 * 顯示聊天室
 * @param {number|null} x 聊天室position x位置
 * @param {number|null} y 聊天室position y位置
 */
Miso.prototype.show = function (x, y) {
  if (this.created && this.newDiv.style.display === "none") {
    this._setPosition(x, y);
    this.newDiv.style.display = "block";
    this.visible = true;

    this._initDragDrop();

    if (this.isMobile) {
      this._lockBackgroundScroll(true);
    }
  }
};

/**
 * 隱藏聊天室
 */
Miso.prototype.hide = function () {
  if (this.created) {
    this.newDiv.style.display = "none";
    this.visible = false;

    this._clearDragDrop();

    if (this.isMobile) {
      this._lockBackgroundScroll(false);
    }
  }
}

/**
 * 聊天室跟單
 * @param {object} params 聊天室跟單參数
 */
Miso.prototype.shareform = function (params) {
  if (params && params.constructor.name === "Object") {
    const searchParams = new URLSearchParams(params);
    this.iframe.src = this.url.origin + "/home/shareCopyForm?" + searchParams.toString();
  }
}

/**
 * 聊天室曬單
 * @param {object} params 聊天室曬單參数
 */
Miso.prototype.showform = function (params) {
  if (params && params.constructor.name === "Object") {
    const searchParams = new URLSearchParams(params);
    this.iframe.src = this.url.origin + "/home/shareShowform?" + searchParams.toString();
  }
}

/**
 * 聊天室密友詳細信息
 * @param {object} params 聊天室密聊號
 */
Miso.prototype.showuser = function (params) {
  if (params && params.name === "Object" && !!params.id) {
    this.iframe.src = this.url.origin + "/home/content/userinfo/" + params.id;
  }
}

/**
 * 設定聊天室大小
 * @param {number} width 聊天室寬(px)
 * @param {number} height 聊天室高(px)
 */
Miso.prototype.setSize = function (width, height) {
  const w = Number(width) || 0;
  const h = Number(height) || 0;

  if (w === 0 || h === 0) {
    return;
  }

  this.chatroomW = w;
  this.chatroomH = h;

  this.newDiv.style.width = this.chatroomW + "px";
  this.newDiv.style.height = this.chatroomH + "px";

  this.headerDiv.style.height = this.headerH + "px";

  this.iframe.style.height = (this.chatroomH - this.headerH) + "px";
}

Miso.prototype._setPosition = function (x, y) {
  if (x === undefined || y === undefined) {
    return;
  }

  const left = Number(x) || 0;
  const top = Number(y) || 0;

  this.newDiv.style.left = Math.max(this.minBoundX, Math.min(left, this.maxBoundX)) + "px";
  this.newDiv.style.top = Math.max(this.minBoundY, Math.min(top, this.maxBoundY)) + "px";
}

Miso.prototype._createStyle = function () {
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = "#misoMoveIcon, #misoCloseIcon { width: 50px; height: 50px; }";
  style.innerHTML += "#misoCloseIcon { margin-left: 10px; cursor: pointer; }";
  style.innerHTML += "#misoMoveIcon { cursor: move; }";
  style.innerHTML += "#misoMoveIcon { background-image: url("+ this.img.move +"); }";
  style.innerHTML += "#misoMoveIcon:hover { background-image: url("+ this.img.move_h +"); }";
  style.innerHTML += "#misoCloseIcon { background-image: url("+ this.img.close +"); }";
  style.innerHTML += "#misoCloseIcon:hover { background-image: url("+ this.img.close_h +"); }";

  return style;
}

Miso.prototype._createMoveBtn = function () {
  const div = document.createElement("div");
  div.id = this.moveIconID;

  this.moveDiv = div;

  return div;
}

Miso.prototype._createCLoseBtn = function () {
  const div = document.createElement("div");
  div.id = this.closeIconID;

  div.onclick = function () {
    this.hide();
  }.bind(this);

  return div;
}

Miso.prototype._createElement = function (url, params) {
  this.url = new URL(url);
  const searchParams = new URLSearchParams(params);
  var headerDivDisplay = "flex";

  // mobile
  this.isMobile = params.isMobile;

  if (this.isMobile) {
    headerDivDisplay = "none";
    this.headerH = 0;
  }

  this.newDiv = document.createElement("div");
  this.headerDiv = document.createElement("div");
  this.iframe = document.createElement("iframe")
  this.iframe.allow = "camera;microphone";

  this.newDiv.id = "chatroomEl";
  this.headerDiv.id = "chatroomHeader";

  this.newDiv.style = "position: fixed; display: none; z-index: 999";
  this.headerDiv.style = "display: " + headerDivDisplay + "; align-items: center; justify-content: flex-end; z-index: 10;";

  this.iframe.style = "border: none";
  this.iframe.style.width = "100%";

  this.iframe.src = this.url.origin + "/home/chatrooms?" + searchParams.toString();

  this.setSize(this.chatroomW, this.chatroomH);

  this.maxBoundX = window.innerWidth - this.chatroomW;
  this.maxBoundY = window.innerHeight - this.chatroomH;

  this.headerDiv.appendChild(this._createMoveBtn());
  this.headerDiv.appendChild(this._createCLoseBtn());

  this.newDiv.appendChild(this.headerDiv);
  this.newDiv.appendChild(this.iframe);

  document.getElementsByTagName("head")[0].appendChild(this._createStyle());
  document.body.appendChild(this.newDiv);

  this._initDragDrop();

  this.created = true;
}

Miso.prototype._initDragDrop = function () {
  document.onmousedown = this._onMouseClickDown.bind(this);
  document.onmouseup = this._onMouseClickUp.bind(this);
  window.addEventListener("message", this._receiveMessageFromIframePage.bind(this), false);
}

Miso.prototype._clearDragDrop = function () {
  document.onmousedown = null;
  document.onmouseup = null;
  window.removeEventListener("message", this._receiveMessageFromIframePage.bind(this), false);
}

Miso.prototype._onMouseClickDown = function (event) {
  this.startX = event.clientX;
  this.startY = event.clientY;

  this.offsetX = this._extractNumber(this.newDiv.style.left);
  this.offsetY = this._extractNumber(this.newDiv.style.top);

  this.maxBoundX = this.minBoundX + window.innerWidth - this.newDiv.offsetWidth;
  this.maxBoundY = this.minBoundY + window.innerHeight - this.newDiv.offsetHeight;

  this.oldZIndex = this.newDiv.style.zIndex;

  this.dragElement = this.newDiv;

  document.onmousemove = this._onMouseMove.bind(this);

  document.body.focus()

  document.onselectstart = function() {
    return false
  };
}

Miso.prototype._extractNumber = function(value) {
  const number = parseInt(value);

  if (number == null || isNaN(number)) {
    return 0;
  } else {
    return number;
  }
}

Miso.prototype._onMouseClickUp = function() {
  if (this.dragElement != null) {

    this.dragElement.style.zIndex = this.oldZIndex;

    document.onmousemove = null;
    document.onselectstart = null;

    this.dragElement = null;
  }
}

Miso.prototype._onMouseMove = function(event) {
  if (event.target.id !== this.moveIconID) {
    return;
  }

  this.dragElement.style.left = Math.max(this.minBoundX, Math.min(this.offsetX + event.clientX - this.startX, this.maxBoundX)) + "px";
  this.dragElement.style.top = Math.max(this.minBoundY, Math.min(this.offsetY + event.clientY - this.startY, this.maxBoundY)) + "px";
}

Miso.prototype._receiveMessageFromIframePage = function (event) {
  const isClose = event.data.close || false;

  if (isClose) {
    this.hide();
  }
}

Miso.prototype._lockBackgroundScroll = function(isEnabled) {
  if (isEnabled) {
    document.body.style = "height: 100%; overflow: hidden;";
  } else {
    document.body.style = this.originalBodyStyle;
  }
}

window.miso = new Miso();
export default window.miso;