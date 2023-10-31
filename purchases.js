function purchases() {
  alertActiveMessage.innerHTML = `You are currently active on purchases page!`;
  setTimeout(() => {
    alertActiveMessage.innerHTML = ``;
  }, 2500);
}
var items = JSON.parse(localStorage.getItem("items"));
var total = localStorage.getItem("total");
function meter() {
  items.map((items, index) => {
    display.innerHTML += `
    <div class="items container">
      <div class="card">
        <div class="card-body">
          <h5 class="list-group-item">ITEM ${index + 1}</h5>
          <h5 class="list-group-item">ITEM(${items.Name})</h5>
          <h5 class="list-group-item">COST(${items.Cost})</h5>
          <h5 class="list-group-item">QUANTITY(${items.Quantity})</h5>
          <h5 class="list-group-item">TOTAL(${items.Total})</h5>
        </div>
        <div>
          <button class="action" onclick="edit(${index}) type="button" data-bs-toggle="data-bs-target="#exampleModal">EDIT</button>
          <button class="action-delete" onclick="del(${index})">DELETE</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Edit your items</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front red">
                        <div class="inputs">
                          <input class="input" type="text" id="ProductName" placeholder="Input item here">
                          <input class="input" type="number" id="ProductCost" placeholder="Input cost here">
                          <input class="input" type="number" id="Quantity" placeholder="Input quantity here">
                          <input class="input-button" type="submit" onclick="Add()" id="button"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal"">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bubbles">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
        <img src="/bubble.png" alt="">
    </div>`;
  });
}
meter();

function del(index) {
  confirm(
    "Are you certain, you want to delete this Item, as erasure is non-reversal"
  );
  display.innerHTML = "";
  var mid = items[index].Total;
  total = total - mid;
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  meter();
  localStorage.setItem("total", total);
}

function edit() {
  
}
