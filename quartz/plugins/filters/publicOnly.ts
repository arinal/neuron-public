import { QuartzFilterPlugin } from "../types"

/**
 * PublicOnly — opt-in publishing with a hard private block.
 *
 * A page is published ONLY if its tags contain `public` and do NOT contain
 * `private`. Quartz merges frontmatter `tags:` and inline `#tags` into
 * `frontmatter.tags` (slugified), so `#public` -> "public", `#private` ->
 * "private". Nested tags like `public/foo` also count via prefix match.
 *
 * This is the second, independent safety layer on top of sync-content.mjs.
 */
function hasTag(tags: string[] | undefined, target: string): boolean {
  if (!tags) return false
  return tags.some((t) => {
    const s = String(t).toLowerCase()
    return s === target || s.startsWith(target + "/")
  })
}

export const PublicOnly: QuartzFilterPlugin = () => ({
  name: "PublicOnly",
  shouldPublish(_ctx, [_tree, vfile]) {
    const tags = vfile.data?.frontmatter?.tags as string[] | undefined
    if (hasTag(tags, "private")) return false
    return hasTag(tags, "public")
  },
})
