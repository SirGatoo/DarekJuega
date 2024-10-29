const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.HTMLElement,
		C3.Plugins.Button,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{darek: 0},
	{moneda: 0},
	{matias: 0},
	{torres: 0},
	{Solid: 0},
	{Sprite: 0},
	{Text: 0},
	{textovidas: 0},
	{Text2: 0},
	{Text3: 0},
	{play: 0},
	{HTMLElement: 0},
	{Button: 0},
	{Button2: 0},
	{Text4: 0},
	{monedas: 0},
	{vidas: 0}
];

self.InstanceType = {
	darek: class extends self.ISpriteInstance {},
	moneda: class extends self.ISpriteInstance {},
	matias: class extends self.ISpriteInstance {},
	torres: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	textovidas: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	play: class extends self.ISpriteInstance {},
	HTMLElement: class extends self.IHTMLElementInstance {},
	Button: class extends self.IButtonInstance {},
	Button2: class extends self.IButtonInstance {},
	Text4: class extends self.ITextInstance {}
}