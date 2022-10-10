import { Connection } from '.';
import { Buffer as Buff } from 'buffer';

export default class InMemory implements Connection {
  list: Buffer[];

  async open(): Promise<void> {
    this.list = [];
  }

  async write(data: Buffer): Promise<void> {
    this.list.push(data);
  }

  async close(): Promise<void> { }

  buffer() {
    return Buff.concat(this.list);
  }
}
