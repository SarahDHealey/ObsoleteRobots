#pragma strict

var score = 0;

function Start () {
}
 
function OnTriggerEnter2D(other: Collider2D) {
    if(other.gameObject.tag == "Destroyer") {
		Application.LoadLevel(1);
		return;
	}
	else if(other.gameObject.tag == "RightDestroyer") {
	  Debug.Log("You hit the Right Destroyer!!!");
      Application.LoadLevel(2);
    }
}