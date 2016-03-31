var Animator = function()
{
	this.current_animation_frame = -1;
	this.animation_frames = [];
}

Animator.prototype.hide = function()
{
	$('#video-contents').html('')
  $('#video-controls').css('visibility', 'hidden')
	$('#overlay').css('visibility', 'hidden')
}

Animator.prototype.set_animation_html = function()
{
	$('#video-contents').html('<video autoplay onended=state.animator.what_next() width="100%" height="100%" controls><source src="images/DATABASE/' + this.animation_frames[this.current_animation_frame] + '" type="video/mp4" ></video>')
}

Animator.prototype.what_next = function()
{
	if (this.current_animation_frame == 0)
		$('#video-controls-last').css('visibility', 'hidden')
	else
		$('#video-controls-last').css('visibility', 'inherit')
		
	if (this.current_animation_frame >= (this.animation_frames.length - 1))
		$('#video-controls-next').css('visibility', 'hidden')
	else
		$('#video-controls-next').css('visibility', 'inherit')
		
  $('#video-controls').css('visibility', 'visible')
}

Animator.prototype.next = function()
{
  $('#video-controls').css('visibility', 'hidden')
	this.current_animation_frame = this.current_animation_frame + 1;
	if (this.current_animation_frame >= this.animation_frames.length)
		this.hide();
	else
		this.set_animation_html();
}

Animator.prototype.last = function()
{
  $('#video-controls').css('visibility', 'hidden')
	this.current_animation_frame = this.current_animation_frame - 1;
	if (this.current_animation_frame < 0)
		this.hide();
	else
		this.set_animation_html();
}

Animator.prototype.rerun = function()
{
  $('#video-controls').css('visibility', 'hidden')
	this.set_animation_html();
}

Animator.prototype.run = function(str)
{
	this.current_animation_frame = 0;
	this.animation_frames = str.split(':')
	$('#video-controls').css('visibility', 'hidden')
	$('#overlay').css('visibility', 'visible')
	this.set_animation_html();
}



