import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-video-log',
	templateUrl: './video-log.component.html',
	styleUrls: ['./video-log.component.scss']
})
export class VideoLogComponent implements OnInit {
	@Input() videosLogItem;

	static parameters = [DomSanitizer];
	constructor(private sanitizer: DomSanitizer) {
		this.sanitizer = sanitizer;
	}

	ngOnInit() {
	}

	encodeURIComponent(url) {
		return encodeURIComponent(url);
	}
}
