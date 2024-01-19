import { Content } from "./content-interface";

export class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  get content(): Content[] {
    return this.contentArray;
  }

  add(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  getCount(): number {
    return this.contentArray.length;
  }

  htmlOutput(): string {
    let htmlString = '';

    for (const item of this.contentArray) {
      htmlString += `
        <div id="${item.id}">
          <h2>${item.title}</h2>
          <img src="${item.imgURL}" alt="This is an image" />
          <p>${item.description}</p>
        </div>
      `;
    }

    return htmlString;
  }
}
