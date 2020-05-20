import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';

interface VideosLogItem {
	title: string;
	url: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	videosLogItemsChunks: VideosLogItem[][] = [];


	static parameters = [HttpClient];
	constructor(private http: HttpClient) {
		this.http = http;
	}

	ngOnInit() {
		return this.http.get('/api/videosLogs')
			.subscribe((res: any) => {
				this.videosLogItemsChunks = _.chunk(res && res.data && res.data.videos_log && res.data.videos_log.items || [], Math.ceil((res && res.data && res.data.videos_log && res.data.videos_log.items || []).length / 3));
			});
	}
}
