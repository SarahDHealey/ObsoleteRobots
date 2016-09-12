#pragma strict

function OnGUI() {
	GUI.Label(new Rect(Screen.width / 2 - 40, 50, 80, 80), "GAME OVER, YOU LOST!");
	if (GUI.Button(new Rect(Screen.width / 2 - 30, 350, 60, 30), "Retry?")) {
	  Application.LoadLevel(0);
	}
}