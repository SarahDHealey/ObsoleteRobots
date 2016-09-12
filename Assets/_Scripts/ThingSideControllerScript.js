#pragma strict

var maxSpeed : float = 10;
var facingRight : boolean = true;
var velocity: Vector2;
var animator: Animator;
var rb2D: Rigidbody2D;

//jumping
var jumpHeight = 7;
var maxJumps = 0; //maximum number of jumps
var numJumps = 0; //current number of jumps



//ending game



	
function Start() {
	rb2D = GetComponent(Rigidbody2D);
	animator = GetComponent(Animator);

}

function FixedUpdate ()
{

	//jumping
	var x;
	var y;
	if(Input.GetKeyDown(KeyCode.Space) && canJump()) {
		x = rb2D.velocity.x;
		rb2D.velocity = new Vector2(0, jumpHeight);
		++numJumps;
	}
	//moving & flipping
	var move : float = Input.GetAxis ("Horizontal");

	rb2D.velocity = new Vector2(move*maxSpeed, rb2D.velocity.y);

	if(move > 0 && !facingRight) {
		Flip();
	}
	else if(move < 0 && facingRight) {
		Flip();
	}
	animator.SetFloat("Speed", Mathf.Abs(move));

}

function Flip ()
{
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;
}

function OnCollisionEnter2D (coll : Collision2D) {
	if (coll.gameObject.CompareTag("Ground")) {
	numJumps = 0;
	}
}
function canJump() {
	return numJumps < maxJumps;
}

function OnTriggerEnter2D(other: Collider2D)
{
    if(other.gameObject.tag == "Destroyer" || "RightDestroyer")
    {
		Application.LoadLevel(1);
    }

}


