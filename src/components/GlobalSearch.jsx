import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useSalesData } from '../context/SalesDataContext'
import { useContent } from '../context/ContentContext'

function GlobalSearch({ isOpen, onClose }) {
  const { salesData } = useSalesData()
  const { loadContent, loadHandler, loadReferenceContent, loadObjection } = useContent()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const resultsRef = useRef(null)

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      setSearchQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Search across all content types
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || !salesData) return []

    const query = searchQuery.toLowerCase()
    const results = []

    // Search sequential flow content
    if (salesData.sequential_flow?.call_one) {
      salesData.sequential_flow.call_one.forEach(item => {
        const searchableText = [
          item.title,
          item.purpose || '',
          item.script || '',
          item.context || '',
          item.advisor_mindset || '',
          item.advisor_guidance || '',
          ...(item.advisor_notes || []),
          ...(item.question_groups?.flatMap(g => g.questions) || [])
        ].join(' ').toLowerCase()

        if (searchableText.includes(query)) {
          results.push({
            type: 'content',
            id: item.id,
            title: item.title,
            category: item.category,
            phase: item.phase,
            snippet: getSnippet(item.title + ' ' + (item.purpose || ''), query),
            matchScore: calculateMatchScore(searchableText, query)
          })
        }
      })
    }

    // Search objection handlers
    if (salesData.objection_handlers?.handlers) {
      Object.entries(salesData.objection_handlers.handlers).forEach(([handlerId, handler]) => {
        const searchableText = [
          handler.title || handlerId,
          handler.trigger || '',
          handler.quick_response || '',
          handler.key_principle || '',
          handler.category || '',
          ...(handler.advisor_notes || []),
          ...(handler.script || [])
        ].join(' ').toLowerCase()

        if (searchableText.includes(query)) {
          results.push({
            type: 'handler',
            id: handlerId,
            title: handler.title || handlerId,
            category: handler.category,
            snippet: getSnippet(handler.title || handlerId + ' ' + (handler.trigger || ''), query),
            matchScore: calculateMatchScore(searchableText, query)
          })
        }
      })
    }

    // Search objections by number
    if (salesData.objection_handlers?.objections) {
      salesData.objection_handlers.objections.forEach(obj => {
        const searchableText = [
          obj.objection || '',
          obj.number?.toString() || '',
          obj.category || ''
        ].join(' ').toLowerCase()

        if (searchableText.includes(query)) {
          results.push({
            type: 'objection',
            id: obj.number?.toString(),
            title: `Objection #${obj.number}: ${obj.objection || 'Untitled'}`,
            category: obj.category,
            snippet: getSnippet(obj.objection || '', query),
            matchScore: calculateMatchScore(searchableText, query)
          })
        }
      })
    }

    // Search reference libraries
    if (window.reference_libraries?.reference_libraries) {
      Object.entries(window.reference_libraries.reference_libraries).forEach(([refId, ref]) => {
        const searchableText = [
          ref.title || refId,
          ref.content || '',
          ...(ref.sections?.map(s => s.title + ' ' + (s.content || '')).join(' ') || [])
        ].join(' ').toLowerCase()

        if (searchableText.includes(query)) {
          results.push({
            type: 'reference',
            id: refId,
            title: ref.title || refId,
            category: 'Reference',
            snippet: getSnippet(ref.title || refId + ' ' + (ref.content || ''), query),
            matchScore: calculateMatchScore(searchableText, query)
          })
        }
      })
    }

    // Sort by match score and limit results
    return results
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 20)
  }, [searchQuery, salesData])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter' && searchResults.length > 0) {
        e.preventDefault()
        handleSelectResult(searchResults[selectedIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, searchResults, selectedIndex, onClose])

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.children[selectedIndex]
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      }
    }
  }, [selectedIndex])

  const handleSelectResult = (result) => {
    if (!result) return

    switch (result.type) {
      case 'content':
        loadContent(result.id)
        break
      case 'handler':
        loadHandler(result.id)
        break
      case 'reference':
        loadReferenceContent(result.id)
        break
      case 'objection':
        loadObjection(parseInt(result.id))
        break
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="global-search-overlay" onClick={onClose}>
      <div className="global-search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="global-search-header">
          <div className="global-search-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="global-search-input"
              placeholder="Search all content..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setSelectedIndex(0)
              }}
            />
            <span className="global-search-hint">Press Esc to close</span>
          </div>
        </div>
        <div className="global-search-results" ref={resultsRef}>
          {searchQuery.trim() && searchResults.length === 0 ? (
            <div className="global-search-empty">
              No results found for "{searchQuery}"
            </div>
          ) : searchQuery.trim() ? (
            searchResults.map((result, index) => (
              <div
                key={`${result.type}-${result.id}`}
                className={`global-search-result ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => handleSelectResult(result)}
              >
                <div className="global-search-result-header">
                  <span className="global-search-result-type">{getTypeLabel(result.type)}</span>
                  <span className="global-search-result-category">{result.category}</span>
                </div>
                <div className="global-search-result-title">{result.title}</div>
                {result.snippet && (
                  <div className="global-search-result-snippet">{result.snippet}</div>
                )}
              </div>
            ))
          ) : (
            <div className="global-search-empty">
              Start typing to search across all content...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function getTypeLabel(type) {
  const labels = {
    content: '📋 Content',
    handler: '⛽ Handler',
    reference: '📚 Reference',
    objection: '⚠️ Objection'
  }
  return labels[type] || type
}

function getSnippet(text, query) {
  const index = text.toLowerCase().indexOf(query.toLowerCase())
  if (index === -1) return text.substring(0, 100) + '...'
  
  const start = Math.max(0, index - 30)
  const end = Math.min(text.length, index + query.length + 70)
  let snippet = text.substring(start, end)
  
  if (start > 0) snippet = '...' + snippet
  if (end < text.length) snippet = snippet + '...'
  
  return snippet
}

function calculateMatchScore(text, query) {
  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()
  
  // Exact match gets highest score
  if (lowerText.includes(lowerQuery)) {
    // Title matches get bonus
    if (lowerText.startsWith(lowerQuery)) return 100
    return 50
  }
  
  // Word matches
  const words = lowerQuery.split(' ').filter(w => w.length > 0)
  let score = 0
  words.forEach(word => {
    if (lowerText.includes(word)) score += 10
  })
  
  return score
}

export default GlobalSearch

